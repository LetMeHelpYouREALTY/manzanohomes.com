import { FollowUpBossAPI } from "@/lib/fub";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };

    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const followUpBoss = new FollowUpBossAPI();
    const [firstName, ...rest] = formData.name.trim().split(" ");
    const lastName = rest.join(" ");

    const result = await followUpBoss.createLead({
      firstName,
      lastName,
      email: formData.email,
      phone: formData.phone,
      source: "Website Form",
      notes: `Subject: ${formData.subject ?? ""}\n${formData.message ?? ""}`,
    });

    return NextResponse.json({
      success: true,
      lead_id: result.id ?? null,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
