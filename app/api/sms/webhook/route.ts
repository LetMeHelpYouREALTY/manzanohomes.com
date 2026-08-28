import { FollowUpBossAPI } from "@/lib/fub";
import { NextResponse } from "next/server";

type SmsPayload = {
  from?: string;
  body?: string;
  timestamp?: string;
  to?: string;
};

export async function GET() {
  return NextResponse.json({
    message: "SMS webhook endpoint is active",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SmsPayload;
    const from = payload.from?.trim();
    const messageBody = payload.body?.trim();

    if (!from || !messageBody) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const followUpBoss = new FollowUpBossAPI();
    const existingLead = await followUpBoss.getLeadByPhone(from);
    let leadId: string | undefined;

    if (existingLead?.id) {
      await followUpBoss.addNote(existingLead.id, `SMS: ${messageBody}`);
      leadId = existingLead.id;
    } else {
      const created = await followUpBoss.createLead({
        firstName: "SMS",
        lastName: from.slice(-4),
        phone: from,
        source: "SMS",
        notes: messageBody,
        tags: ["SMS", "Website", "Manzano Homes"],
      });
      leadId = created.id;
    }

    if (process.env.SMS_AUTO_REPLY_ENABLED === "true") {
      try {
        await followUpBoss.sendSMS(
          from,
          process.env.SMS_AUTO_REPLY_MESSAGE ||
            "Thanks for texting Manzano Homes! We'll get back to you within 15 minutes. Reply STOP to opt out.",
        );
      } catch (smsError) {
        console.error("SMS auto-reply failed:", smsError);
      }
    }

    return NextResponse.json({
      success: true,
      lead_id: leadId ?? null,
    });
  } catch (error) {
    console.error("SMS webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
