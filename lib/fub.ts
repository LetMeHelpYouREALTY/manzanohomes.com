type LeadInput = {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  source?: string;
  notes?: string;
  tags?: string[];
};

type FubPerson = {
  id?: string;
  firstName?: string;
  lastName?: string;
};

function authHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`;
}

export class FollowUpBossAPI {
  private apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  private baseUrl = process.env.FOLLOW_UP_BOSS_BASE_URL || "https://api.followupboss.com/v1";
  private agentId = process.env.FOLLOW_UP_BOSS_AGENT_ID;

  private headers(): HeadersInit {
    if (!this.apiKey) {
      throw new Error("FOLLOW_UP_BOSS_API_KEY missing");
    }
    return {
      Authorization: authHeader(this.apiKey),
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async createLead(leadData: LeadInput): Promise<{ id?: string }> {
    if (!this.apiKey) {
      console.warn("FOLLOW_UP_BOSS_API_KEY missing — skipping CRM write");
      return { id: "local-dev" };
    }

    const body: Record<string, unknown> = {
      firstName: leadData.firstName,
      lastName: leadData.lastName,
      phones: [{ value: leadData.phone }],
      source: leadData.source || "Website Form",
      tags: leadData.tags ?? ["Website", "Manzano Homes"],
    };

    if (leadData.email) {
      body.emails = [{ value: leadData.email }];
    }

    const response = await fetch(`${this.baseUrl}/people`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Follow Up Boss API error: ${response.status}`);
    }

    const person = (await response.json()) as FubPerson;

    if (leadData.notes && person.id) {
      await this.addNote(person.id, leadData.notes);
    }

    return { id: person.id };
  }

  async getLeadByPhone(phoneNumber: string): Promise<FubPerson | null> {
    if (!this.apiKey) {
      return null;
    }

    const response = await fetch(
      `${this.baseUrl}/people?phone=${encodeURIComponent(phoneNumber)}`,
      { headers: this.headers() },
    );

    if (!response.ok) {
      throw new Error(`Lead search error: ${response.status}`);
    }

    const result = (await response.json()) as { people?: FubPerson[] };
    return result.people?.[0] ?? null;
  }

  async addNote(leadId: string, note: string): Promise<void> {
    if (!this.apiKey) {
      return;
    }

    const response = await fetch(`${this.baseUrl}/notes`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({
        personId: leadId,
        body: note,
      }),
    });

    if (!response.ok) {
      throw new Error(`Note creation error: ${response.status}`);
    }
  }

  async sendSMS(phoneNumber: string, message: string): Promise<void> {
    if (!this.apiKey) {
      return;
    }

    const response = await fetch(`${this.baseUrl}/textMessages`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({
        personPhone: phoneNumber,
        message,
        userId: this.agentId,
      }),
    });

    if (!response.ok) {
      throw new Error(`SMS send error: ${response.status}`);
    }
  }
}
