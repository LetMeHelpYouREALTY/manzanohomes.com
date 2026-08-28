type LeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source?: string;
  notes?: string;
};

export class FollowUpBossAPI {
  private apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  private baseUrl = process.env.FOLLOW_UP_BOSS_BASE_URL || "https://api.followupboss.com/v1";

  async createLead(leadData: LeadInput): Promise<{ id?: string }> {
    if (!this.apiKey) {
      console.warn("FOLLOW_UP_BOSS_API_KEY missing — skipping CRM write");
      return { id: "local-dev" };
    }

    const response = await fetch(`${this.baseUrl}/people`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.apiKey}:`).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        emails: [{ value: leadData.email }],
        phones: [{ value: leadData.phone }],
        source: leadData.source || "Website Form",
        tags: ["Website", "Manzano Homes"],
      }),
    });

    if (!response.ok) {
      throw new Error(`Follow Up Boss API error: ${response.status}`);
    }

    return (await response.json()) as { id?: string };
  }
}
