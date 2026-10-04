import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { commodity, market } = await req.json();

    if (!commodity || !market) {
      return NextResponse.json(
        { error: "Commodity and market are required" },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1500,
      system:
        "You are a JSON-only API. Output ONLY raw valid JSON — no markdown, no explanation.",
      messages: [
        {
          role: "user",
          content: `JSON object only:
{
  "marketIntelligence": "3 sentences on ${commodity} import demand in ${market}.",
  "certificationRequirements": "3 sentences on certifications needed for ${commodity} exports to ${market}.",
  "outreachStrategy": "Step 1: [specific action]\\nStep 2: [specific action]\\nStep 3: [specific action]\\nStep 4: [specific action]\\nStep 5: [specific action]"
}`,
        },
      ],
    });

    const raw = (message.content[0] as { text: string }).text
      .trim()
      .replace(/^```json\s*/, "")
      .replace(/^```\s*/, "")
      .replace(/\s*```$/, "")
      .trim();

    const oStart = raw.indexOf("{");
    const parsed = JSON.parse(raw.substring(oStart, raw.lastIndexOf("}") + 1));

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Intel error:", err);
    return NextResponse.json(
      { error: "Intel fetch failed." },
      { status: 500 }
    );
  }
}