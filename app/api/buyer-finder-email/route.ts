import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";


const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { buyer, commodity } = await req.json();

    if (!buyer || !commodity) {
      return NextResponse.json(
        { error: "Buyer and commodity are required" },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `Write a short professional trade email from Talcora Exim to ${buyer.contactPerson?.name || "the team"} (${buyer.contactPerson?.title || "Procurement Manager"}) at ${buyer.companyName}, ${buyer.country}.

We supply ${commodity} from Nigeria/West Africa.
- Under 180 words
- Professional, not salesy
- Offer a sample or introductory call
- Format exactly as:
SUBJECT: [subject line]

[email body]`,
        },
      ],
    });

    const txt = (message.content[0] as { text: string }).text.trim();
    const subjectMatch = txt.match(/SUBJECT:\s*(.+)/);
    const subject = subjectMatch
      ? subjectMatch[1].trim()
      : "Trade Introduction — Talcora Exim";
    const body = txt.replace(/SUBJECT:.+\n?/, "").trim();

    return NextResponse.json({ subject, body });
  } catch (err) {
    console.error("Email draft error:", err);
    return NextResponse.json(
      { error: "Email generation failed." },
      { status: 500 }
    );
  }
}