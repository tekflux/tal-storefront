import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { commodity, market, buyerType, excludeNames } = await req.json();

    if (!commodity || !market) {
      return NextResponse.json(
        { error: "Commodity and market are required" },
        { status: 400 }
      );
    }

    const excludeClause = excludeNames?.length
      ? `Do NOT include these companies: ${excludeNames.join(", ")}.`
      : "";

    const prompt = `Output a JSON array of 5 companies that import ${commodity} in ${market}. ${excludeClause}
Buyer type focus: ${buyerType || "importer buyer"}.
Each element must have:
companyName, city, country, companyType, website, generalEmail, phone, volume, certifications, source, platformURL,
contactPerson: { name, title, email, phone },
whyTarget, approach: { channel, timing, opener, doc }

source = one of: Europages / Go4WorldBusiness / TradeKey / Tradewheel / Kompass
platformURL = real search URL on that platform for this commodity.
Keep all string values concise (under 12 words each).
Output ONLY the JSON array. No markdown, no explanation.`;

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 4000,
      system:
        "You are a JSON-only API. Output ONLY raw valid JSON — no markdown, no explanation, no text before or after. If asked for array start with [. If asked for object start with {.",
      messages: [{ role: "user", content: prompt }],
    });

    const raw = (message.content[0] as { text: string }).text
      .trim()
      .replace(/^```json\s*/, "")
      .replace(/^```\s*/, "")
      .replace(/\s*```$/, "")
      .trim();

    const aStart = raw.indexOf("[");
    const parsed = JSON.parse(raw.substring(aStart, raw.lastIndexOf("]") + 1));

    return NextResponse.json({ buyers: parsed });
  } catch (err) {
    console.error("Buyer search error:", err);
    return NextResponse.json(
      { error: "Search failed. Please try again." },
      { status: 500 }
    );
  }
}