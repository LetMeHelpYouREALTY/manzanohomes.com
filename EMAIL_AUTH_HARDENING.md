# Email Authentication Hardening Runbook — manzanohomes.com

> Goal: make every legitimate `@ManzanoHomes.com` sender pass **SPF + DKIM + DMARC with
> From-domain alignment**, turn on one-click unsubscribe for marketing mail, then ramp DMARC
> from `p=none` → `p=quarantine` → `p=reject` without ever blocking your own mail.
>
> Status legend: ✅ ready to paste (no secrets needed) · 🔑 needs a value from a vendor dashboard ·
> ❓ needs you to confirm

Last reviewed: 2026-08-28. Re-verify vendor menu paths and provider rules if it's been more than a few months.

---

## TL;DR — what to do, in order

1. **Phase 0 (do first):** get DMARC reports flowing and readable. One record on the
   `ReverenceSummerlinHomes.com` zone + a monitoring DMARC record. ✅ below.
2. **Phase 1:** confirm every tool that sends as `@ManzanoHomes.com`. ❓ checklist below.
3. **Phase 2:** authenticate + align each confirmed sender (SPF include + DKIM). 🔑
4. **Phase 3:** enable RFC 8058 one-click unsubscribe on marketing senders. ❓
5. **Phase 4:** ramp DMARC policy on gates, not dates. ✅ all records below.
6. **Phase 5:** monitor in Google Postmaster Tools + your DMARC dashboard.

**Highest-value / lowest-risk single action:** Phase 0. Nothing else can be verified until reports flow.

**Biggest risk today:** your visible `@ManzanoHomes.com` mail almost certainly *fails alignment*.
SPF only lists Cloudflare, and Gmail/FUB/RealScout sign with their own domains. Do **not** set
`p=reject` until Phase 1–3 reports are clean, or you will bounce your own outbound.

---

## Current DNS snapshot (as provided 2026-08-28)

| Host | Type | Value | Notes |
|---|---|---|---|
| `manzanohomes.com` | CNAME | `61391d7c67c6aa28.vercel-dns-016.com` | Vercel apex, DNS-only (gray cloud) ✅ |
| `www.manzanohomes.com` | CNAME | `61391d7c67c6aa28.vercel-dns-016.com` | Vercel www, DNS-only ✅ |
| `manzanohomes.com` | MX | `route1.mx.cloudflare.net` (64) | Cloudflare Email Routing (inbound only) |
| `manzanohomes.com` | MX | `route2.mx.cloudflare.net` (86) | " |
| `manzanohomes.com` | MX | `route3.mx.cloudflare.net` (47) | " |
| `cf2024-1._domainkey` | TXT | `v=DKIM1; ...` | Cloudflare Email Routing DKIM |
| `manzanohomes.com` | TXT | `v=spf1 include:_spf.mx.cloudflare.net ~all` | **Only authorizes Cloudflare — see Phase 2** |
| `_dmarc.manzanohomes.com` | TXT | `v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=...; fo=1` | **Reports not delivered — see Phase 0** |
| `manzanohomes.com` | TXT | `google-site-verification=...` | leave as-is |
| `_vercel.manzanohomes.com` | TXT | `vc-domain-verify=...` (x2) | leave as-is |

Notes:
- MX = Cloudflare Email Routing means inbound mail is **forwarded**, not hosted here. Your outbound
  path (Gmail "send as", FUB, RealScout, Homebot, …) is separate and currently unauthenticated for
  this domain.
- The apex is a `CNAME`; this only works because Cloudflare flattens apex CNAMEs. It's a portability
  caveat, not an email issue. (Vercel's standards-strict apex is `A 76.76.21.21`.)

---

## Why this matters in 2026 (the rules)

Bulk senders (5,000+/day to a provider's consumer addresses) to Gmail, Yahoo, and Outlook must:

1. Pass **SPF, DKIM, and DMARC**, with the visible **From domain aligned** to at least one of them.
2. Support **RFC 8058 one-click unsubscribe** on marketing mail (both `List-Unsubscribe` and
   `List-Unsubscribe-Post`, DKIM-covered), honored within 2 days.
3. Keep **spam complaint rate < 0.10%** (danger 0.10–0.30%, blocklist risk ≥ 0.30%) and bounce < 2%.

Timeline: Google + Yahoo since Feb 1 2024; one-click unsubscribe since Jun 1 2024; Microsoft Outlook
since May 5 2025; **Google escalated to hard rejections in Nov 2025.** Even under 5,000/day, aligned
auth is now table stakes — RealScout/Homebot newsletters can approach the threshold per provider.

Sources: RFC 7489 §7.1 (external destination verification), RFC 8058 (one-click unsubscribe),
provider bulk-sender guidance current as of 2026-08.

---

## Phase 0 — Make reports flow (do first) ✅

**Decision (2026-08-28):** send reports to `drduffysells@manzanohomes.com` — the **same domain** as
the policy. This is the clean fix: because the report mailbox is on `manzanohomes.com` itself, RFC
7489 §7.1 external-destination verification **does not apply**, so no cross-domain authorization
record is needed. Cloudflare Email Routing forwards mail for that address to your real inbox, so
reports arrive.

> Previously `rua`/`ruf` pointed to `DrJanSells@ReverenceSummerlinHomes.com` (a *different* org
> domain), which meant receivers ignored the URIs and **zero** reports were delivered. Switching to
> the on-domain address removes that failure mode.

### 0a. Set the monitoring DMARC record — replace `_dmarc.manzanohomes.com` TXT with: ✅
```
v=DMARC1; p=none; rua=mailto:drduffysells@manzanohomes.com; ruf=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```
Leave `p=none` until Phase 4. Confirm `drduffysells@manzanohomes.com` has an active Cloudflare Email
Routing rule (it's the site's public contact address, so it should already route).

### 0b. (Optional) Make the reports readable
Raw DMARC XML in an inbox is hard to read. Optionally add a **second** `rua` address for a free
analyzer for dashboards/trends — both get copies, and neither needs an auth record if you keep an
on-domain address in the list:
```
v=DMARC1; p=none; rua=mailto:drduffysells@manzanohomes.com,mailto:REPLACE_WITH_ANALYZER; ruf=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```
🔑 `REPLACE_WITH_ANALYZER` = e.g. an EasyDMARC / dmarcian / URIports / Postmark ingest address.
Note: an analyzer on *its own* domain will publish its own consent record automatically — that's
expected and separate from your on-domain address.

---

## Phase 1 — Sender inventory ❓ (fill this in)

Confirm which tools send using a `@ManzanoHomes.com` From address. Do **not** proceed to reject on
any sender you haven't verified here.

- [ ] Google / Gmail "Send mail as" `@ManzanoHomes.com`  → volume: ____
- [ ] Follow Up Boss (lead follow-up, drips) — sending mode? OAuth-through-mailbox **or** FUB servers
- [ ] RealScout (listing alerts / newsletters) — often high volume
- [ ] Homebot (monthly home-value digests) — often high volume
- [ ] kvCore
- [ ] Cloze
- [ ] Any blast tool (Mailchimp / Constant Contact / etc.): __________
- [ ] Cloudflare Email Routing — **receiving only**, no action

For each checked box, capture: the exact From address, whether it's transactional or marketing, and
the DKIM/SPF values from that tool's domain-authentication screen.

---

## Phase 2 — Authenticate + align each confirmed sender 🔑

**The rule everyone fails:** passing DKIM with the *vendor's* domain is not enough. The signing
domain (`d=`) or the SPF return-path must be **`manzanohomes.com`** (relaxed alignment allows a
subdomain like `mail.manzanohomes.com`).

### Google / Gmail "Send mail as"
- If you send `@ManzanoHomes.com` through a Gmail account on another domain, it signs as *that*
  domain → **not aligned**. Fix: add `manzanohomes.com` to Google Workspace and turn on Google DKIM
  for it, **or** route that address through a service that signs as `manzanohomes.com`.
- SPF: add `include:_spf.google.com`.
- DKIM: Workspace → Apps → Google Workspace → Gmail → Authenticate email → generate → publish the
  `google._domainkey` TXT it gives you. 🔑

### Follow Up Boss — confirm mode first ❓
- **Mode A (preferred): OAuth through your connected Google/Microsoft mailbox.** Alignment comes from
  that mailbox's auth — just make sure that mailbox's domain is authenticated (see Google above).
- **Mode B: FUB's own servers.** Add the SPF include + DKIM CNAME(s) FUB shows in its email/domain
  authentication settings. 🔑

### RealScout / Homebot / kvCore
Each has a "custom sending domain / domain authentication" screen that outputs a DKIM CNAME (and
sometimes a Return-Path/SPF include) for `manzanohomes.com`. Enable it for every one you send from,
then publish the CNAME(s) they give you. 🔑

### Merge SPF into ONE record — watch the 10-lookup limit
Never publish two `v=spf1` records. Combine includes (order doesn't matter):
```
v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com include:REPLACE_ESP ~all
```
Each `include` costs DNS lookups; Cloudflare + Google + two ESPs can blow past the cap of 10 →
`permerror`. If you exceed it, use SPF flattening/macros from your DMARC provider. Keep `~all`
(softfail) until reports are clean; only then consider `-all`.

---

## Phase 3 — One-click unsubscribe (marketing mail) ❓

Required for promotional/subscribed mail; a footer link does **not** count. Verify each marketing
sender (FUB campaigns, RealScout, Homebot) emits both headers, DKIM-covered, honored within 2 days:
```
List-Unsubscribe: <https://…one-click-endpoint…>, <mailto:…>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```
This is a toggle in each tool's campaign settings, not a DNS change. Transactional mail is exempt,
but err toward including it.

---

## Phase 4 — Staged DMARC rollout ✅ (advance on gates, not dates)

Move to the next record only after ~1–2 weeks of aggregate reports show **all legit sources passing
aligned** at the current step. Replace the `_dmarc.manzanohomes.com` TXT each step. Keep your real
`rua`.

**Step 1 — Monitor** (Phase 0b record; 2–4 weeks minimum):
```
v=DMARC1; p=none; rua=mailto:drduffysells@manzanohomes.com; ruf=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```

**Step 2 — Quarantine 25%:**
```
v=DMARC1; p=quarantine; pct=25; rua=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```

**Step 3 — Quarantine 100%:**
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```

**Step 4 — Reject:**
```
v=DMARC1; p=reject; sp=reject; rua=mailto:drduffysells@manzanohomes.com; fo=1; adkim=r; aspf=r
```

**Step 5 — Tighten alignment (optional, last):** switch `adkim=r; aspf=r` → `adkim=s; aspf=s` only if
every sender signs with the exact `manzanohomes.com` domain (no subdomains).

Go / no-go gate at each step: **zero legit sources failing** in the latest reports. If one fails, stop
and fix it before advancing. `sp=` keeps subdomains at the same policy so nobody spoofs
`mail.manzanohomes.com`.

---

## Phase 5 — Monitoring

- Enroll `manzanohomes.com` in **Google Postmaster Tools v2**; watch spam rate (<0.10% target) and
  bounce rate (<2%).
- Keep the DMARC dashboard from Phase 0 as source of truth.
- Re-run Phases 1–2 whenever you add a new tool that emails clients.

---

## Appendix — glossary

- **Alignment:** the visible `From:` domain matches the SPF return-path domain (SPF alignment) and/or
  the DKIM `d=` domain (DKIM alignment). DMARC passes only if at least one aligns.
- **Relaxed (`r`) vs strict (`s`):** relaxed allows an organizational-domain/subdomain match
  (`mail.manzanohomes.com` ↔ `manzanohomes.com`); strict requires an exact match.
- **`fo=1`:** request a failure report if *any* mechanism fails (not just when all fail).
- **`pct`:** percentage of failing mail the policy applies to — the staging lever. Still honored by
  major receivers in 2026; ramp it rather than jumping straight to full enforcement.
- **`sp`:** policy for subdomains; keep it equal to `p` unless you have a reason not to.
