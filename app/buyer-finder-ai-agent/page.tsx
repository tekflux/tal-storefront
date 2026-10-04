"use client";

import { useState, useCallback } from "react";
import type { Buyer, MarketIntel } from "@/types/buyer-finder-types";

// ─── helpers ──────────────────────────────────────────────
function liURL(name = "", title = "", company = "", country = "") {
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(
    `${name} ${title} ${company} ${country}`
  )}`;
}

function copyText(txt: string, cb: (m: string) => void, msg = "Copied!") {
  navigator.clipboard.writeText(txt).then(() => cb(msg));
}

// ─── sub-components ───────────────────────────────────────
function Toast({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#d4a843] text-[#080809] px-5 py-2 font-mono text-xs z-[9999] whitespace-nowrap animate-fade-in">
      {msg}
    </div>
  );
}

function StatusBar({
  msg,
  type,
}: {
  msg: string;
  type: "idle" | "running" | "done" | "error";
}) {
  const colors = {
    idle: "text-[#5a5855] border-[rgba(212,168,67,0.15)]",
    running: "text-[#d4a843] border-[rgba(212,168,67,0.4)]",
    done: "text-[#2ecc7a] border-[rgba(46,204,122,0.25)]",
    error: "text-[#e05555] border-[rgba(224,85,85,0.25)]",
  };
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2.5 bg-[#141416] border-[0.5px] mb-5 font-mono text-[11px] min-h-[40px] ${colors[type]}`}
    >
      {type === "running" && (
        <span className="flex gap-[3px] items-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="inline-block w-[3px] h-[11px] bg-[#d4a843]"
              style={{ animation: `ld 1s ease-in-out ${i * 0.12}s infinite` }}
            />
          ))}
        </span>
      )}
      <span>{msg}</span>
    </div>
  );
}

function BuyerCard({
  buyer,
  idx,
  commodity,
  onEmail,
  onToast,
}: {
  buyer: Buyer;
  idx: number;
  commodity: string;
  onEmail: (idx: number) => void;
  onToast: (msg: string) => void;
}) {
  const li = liURL(
    buyer.contactPerson?.name,
    buyer.contactPerson?.title,
    buyer.companyName,
    buyer.country
  );

  return (
    <div
      className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.15)] mb-3 hover:border-[rgba(212,168,67,0.4)] transition-colors"
      style={{ animation: `fadeUp 0.3s ease ${(idx % 5) * 0.07}s both` }}
    >
      {/* header */}
      <div className="flex items-start justify-between px-[18px] py-4 border-b-[0.5px] border-[rgba(212,168,67,0.15)] gap-3">
        <div>
          <div className="font-display text-base font-semibold text-[#e8e6e0] mb-1">
            {buyer.companyName}
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs text-[#9a9890]">
              📍 {buyer.city}, {buyer.country}
            </span>
            <span className="font-mono text-[9px] tracking-wide px-2 py-0.5 bg-[rgba(212,168,67,0.08)] border-[0.5px] border-[rgba(212,168,67,0.4)] text-[#d4a843]">
              {buyer.companyType}
            </span>
            <span className="font-mono text-[8px] tracking-wider px-1.5 py-0.5 border-[0.5px] border-[rgba(46,204,122,0.4)] text-[#2ecc7a] uppercase">
              via {buyer.source || "B2B Platform"}
            </span>
          </div>
        </div>
      </div>

      {/* 2-col grid */}
      <div className="grid grid-cols-2 border-b-[0.5px] border-[rgba(212,168,67,0.15)] max-sm:grid-cols-1">
        {/* contact */}
        <div className="p-[14px_18px] border-r-[0.5px] border-[rgba(212,168,67,0.15)] max-sm:border-r-0 max-sm:border-b-[0.5px]">
          <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2.5 flex items-center gap-1.5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(212,168,67,0.15)]">
            Key Contact
          </div>
          <div className="bg-[#141416] border-[0.5px] border-[rgba(212,168,67,0.15)] p-[10px_12px]">
            <div className="text-sm font-medium text-[#e8e6e0] mb-0.5">
              {buyer.contactPerson?.name || "—"}
            </div>
            <div className="text-[11px] text-[#9a9890] mb-2">
              {buyer.contactPerson?.title || "Procurement Manager"}
            </div>
            <div className="flex flex-col gap-1">
              <a
                href={li}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-[#9a9890] px-2 py-1 border-[0.5px] border-transparent hover:border-[rgba(212,168,67,0.4)] hover:text-[#e8e6e0] hover:bg-[#1c1c1f] transition-all"
              >
                <span className="w-4 h-4 rounded-sm bg-[#0a66c2] grid place-items-center text-[9px] text-white font-mono font-semibold flex-shrink-0">
                  in
                </span>
                Search on LinkedIn →
              </a>
              <button
                onClick={() =>
                  copyText(
                    buyer.contactPerson?.email || "",
                    onToast,
                    "Email copied!"
                  )
                }
                className="flex items-center gap-1.5 text-[11px] text-[#9a9890] px-2 py-1 border-[0.5px] border-transparent hover:border-[rgba(212,168,67,0.4)] hover:text-[#e8e6e0] hover:bg-[#1c1c1f] transition-all text-left"
              >
                <span className="w-4 h-4 rounded-sm bg-[#1c1c1f] border-[0.5px] border-[rgba(212,168,67,0.15)] grid place-items-center text-[9px] text-[#d4a843] flex-shrink-0">
                  @
                </span>
                <span className="flex-1">{buyer.contactPerson?.email || "—"}</span>
                <span className="text-[9px] text-[#5a5855]">copy</span>
              </button>
              {buyer.contactPerson?.phone && (
                <button
                  onClick={() =>
                    copyText(
                      buyer.contactPerson.phone,
                      onToast,
                      "Phone copied!"
                    )
                  }
                  className="flex items-center gap-1.5 text-[11px] text-[#9a9890] px-2 py-1 border-[0.5px] border-transparent hover:border-[rgba(212,168,67,0.4)] hover:text-[#e8e6e0] hover:bg-[#1c1c1f] transition-all text-left"
                >
                  <span className="w-4 h-4 rounded-sm bg-[#1a7a48] grid place-items-center text-[9px] text-white flex-shrink-0">
                    ☎
                  </span>
                  <span className="flex-1">{buyer.contactPerson.phone}</span>
                  <span className="text-[9px] text-[#5a5855]">copy</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* company info */}
        <div className="p-[14px_18px]">
          <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2.5 flex items-center gap-1.5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(212,168,67,0.15)]">
            Company Info
          </div>
          {[
            { ico: "🌐", val: buyer.website, href: `https://${buyer.website}` },
            { ico: "@", val: buyer.generalEmail },
            { ico: "☎", val: buyer.phone },
            { ico: "📦", val: buyer.volume },
            { ico: "✓", val: buyer.certifications },
          ].map(
            ({ ico, val, href }) =>
              val && (
                <div key={ico} className="flex items-start gap-2 mb-1.5">
                  <div className="w-5 h-5 border-[0.5px] border-[rgba(212,168,67,0.15)] grid place-items-center text-[9px] text-[#7a6020] flex-shrink-0">
                    {ico}
                  </div>
                  <div className="text-xs text-[#9a9890]">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4a9fd4] hover:underline"
                      >
                        {val}
                      </a>
                    ) : (
                      val
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* platform links */}
      <div className="px-[18px] py-3 border-b-[0.5px] border-[rgba(212,168,67,0.15)]">
        <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2 flex items-center gap-1.5 after:content-[''] after:flex-1 after:h-px after:bg-[rgba(212,168,67,0.15)]">
          Verify on Platforms
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            {
              label: `${buyer.source || "Platform"} →`,
              href: buyer.platformURL || "#",
              dot: "#2ecc7a",
            },
            { label: "LinkedIn →", href: li, dot: "#0a66c2" },
            {
              label: "Kompass →",
              href: `https://www.kompass.com/searchprofile/for/${encodeURIComponent(buyer.companyName)}/`,
              dot: "#e67e22",
            },
            {
              label: "Europages →",
              href: `https://www.europages.co.uk/companies/${encodeURIComponent(buyer.country?.toLowerCase() || "")}/${encodeURIComponent(commodity)}/`,
              dot: "#2980b9",
            },
          ].map(({ label, href, dot }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] bg-[#141416] text-[#9a9890] font-mono text-[10px] hover:border-[rgba(212,168,67,0.4)] hover:text-[#d4a843] transition-all"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: dot }}
              />
              {label}
            </a>
          ))}
          <button
            onClick={() =>
              copyText(buyer.generalEmail || "", onToast, "Email copied!")
            }
            className="flex items-center gap-1.5 px-3 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] bg-[#141416] text-[#9a9890] font-mono text-[10px] hover:border-[rgba(212,168,67,0.4)] hover:text-[#d4a843] transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] flex-shrink-0" />
            Copy Email
          </button>
        </div>
      </div>

      {/* why + approach */}
      <div className="grid grid-cols-2 border-b-[0.5px] border-[rgba(212,168,67,0.15)] max-sm:grid-cols-1">
        <div className="p-[12px_18px] text-xs text-[#9a9890] leading-relaxed border-r-[0.5px] border-[rgba(212,168,67,0.15)] max-sm:border-r-0 max-sm:border-b-[0.5px]">
          <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2">
            Why Target
          </div>
          {buyer.whyTarget || "—"}
        </div>
        <div className="p-[12px_18px] text-xs text-[#9a9890]">
          <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2">
            How to Approach
          </div>
          {[
            { k: "Channel", v: buyer.approach?.channel },
            { k: "Best time", v: buyer.approach?.timing },
            { k: "Open with", v: buyer.approach?.opener },
            { k: "Send doc", v: buyer.approach?.doc },
          ].map(({ k, v }) => (
            <div key={k} className="flex gap-2 mb-1">
              <span className="font-mono text-[10px] text-[#5a5855] min-w-[72px] flex-shrink-0">
                {k}:
              </span>
              <span>{v || "—"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* footer actions */}
      <div className="flex gap-2 px-[18px] py-2.5 flex-wrap">
        <button
          onClick={() => onEmail(idx)}
          className="font-mono text-[9px] tracking-wider uppercase px-3.5 py-1.5 border-[0.5px] border-[#d4a843] text-[#d4a843] bg-transparent hover:bg-[#d4a843] hover:text-[#080809] transition-all"
        >
          Draft Email →
        </button>
        <a
          href={li}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[9px] tracking-wider uppercase px-3.5 py-1.5 border-[0.5px] border-[rgba(10,102,194,0.5)] text-[#4a9fd4] hover:bg-[rgba(10,102,194,0.15)] transition-all"
        >
          LinkedIn →
        </a>
        <button
          onClick={() =>
            copyText(
              `COMPANY: ${buyer.companyName}\nLOCATION: ${buyer.city}, ${buyer.country}\nWEBSITE: ${buyer.website || "—"}\nEMAIL: ${buyer.generalEmail || "—"}\nPHONE: ${buyer.phone || "—"}\n\nCONTACT: ${buyer.contactPerson?.name || "—"} (${buyer.contactPerson?.title || "—"})\nDIRECT EMAIL: ${buyer.contactPerson?.email || "—"}\nSOURCE: ${buyer.source || "—"}`,
              onToast,
              "Lead copied!"
            )
          }
          className="font-mono text-[9px] tracking-wider uppercase px-3.5 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#5a5855] hover:border-[#9a9890] hover:text-[#9a9890] transition-all"
        >
          Copy Lead
        </button>
      </div>
    </div>
  );
}

function EmailModal({
  open,
  buyer,
  subject,
  body,
  loading,
  onClose,
  onToast,
}: {
  open: boolean;
  buyer: Buyer | null;
  subject: string;
  body: string;
  loading: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}) {
  if (!open) return null;
  const fullEmail = buyer
    ? `To: ${buyer.contactPerson?.email || ""}\nSubject: ${subject}\n\n${body}`
    : "";

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-5"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.4)] max-w-[600px] w-full max-h-[88vh] overflow-y-auto p-5 relative animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3.5 bg-transparent border-none text-[#5a5855] text-xl cursor-pointer hover:text-[#e8e6e0] leading-none"
        >
          ×
        </button>
        <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-3.5">
          // Email Draft
          {buyer ? ` — ${buyer.companyName}` : ""}
        </div>

        {loading ? (
          <div className="flex items-center gap-2 text-[#d4a843] text-sm mt-2.5">
            <span className="flex gap-[3px] items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-block w-[3px] h-[11px] bg-[#d4a843]"
                  style={{
                    animation: `ld 1s ease-in-out ${i * 0.12}s infinite`,
                  }}
                />
              ))}
            </span>
            Writing to {buyer?.contactPerson?.name || "contact"} at{" "}
            {buyer?.companyName}...
          </div>
        ) : (
          <>
            <div className="text-[11px] text-[#5a5855] mb-1">To</div>
            <div className="text-sm text-[#4a9fd4] mb-3">
              {buyer?.contactPerson?.name || "—"} &lt;
              {buyer?.contactPerson?.email || "—"}&gt;
            </div>
            <div className="text-[11px] text-[#5a5855] mb-1">Subject</div>
            <div className="text-[15px] font-medium text-[#e8e6e0] mb-3 pb-3 border-b-[0.5px] border-[rgba(212,168,67,0.15)]">
              {subject}
            </div>
            <div className="text-sm text-[#9a9890] leading-8 whitespace-pre-line mb-4">
              {body}
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => copyText(fullEmail, onToast, "Email copied!")}
                className="font-mono text-[9px] tracking-wider uppercase px-4 py-2 border-[0.5px] border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-[#080809] transition-all"
              >
                Copy Email
              </button>
              {buyer && (
                <a
                  href={liURL(
                    buyer.contactPerson?.name,
                    buyer.contactPerson?.title,
                    buyer.companyName,
                    buyer.country
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[9px] tracking-wider uppercase px-4 py-2 border-[0.5px] border-[#d4a843] text-[#d4a843] hover:bg-[#d4a843] hover:text-[#080809] transition-all"
                >
                  Open LinkedIn →
                </a>
              )}
              <button
                onClick={onClose}
                className="font-mono text-[9px] tracking-wider uppercase px-4 py-2 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#5a5855] hover:border-[#9a9890] hover:text-[#9a9890] transition-all"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── main page ────────────────────────────────────────────
export default function BuyerFinderAIAgent() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [showPw, setShowPw] = useState(false);

  const [commodity, setCommodity] = useState("");
  const [market, setMarket] = useState("");
  const [buyerType, setBuyerType] = useState("importer buyer");

  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [intel, setIntel] = useState<MarketIntel | null>(null);
  const [status, setStatus] = useState<{
    msg: string;
    type: "idle" | "running" | "done" | "error";
  }>({ msg: "Ready — select a commodity and market to begin", type: "idle" });

  const [searching, setSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [toast, setToastMsg] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalBuyer, setModalBuyer] = useState<Buyer | null>(null);
  const [modalSubject, setModalSubject] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2500);
  }, []);

  // auth
  const unlock = () => {
    if (pw === process.env.NEXT_PUBLIC_PORTAL_PASSWORD || pw === "Trybex2025") {
      setAuthed(true);
      setPwErr("");
    } else {
      setPwErr("Incorrect password. Please try again.");
      setPw("");
    }
  };

  // search
  const runSearch = async () => {
    if (!commodity || !market) {
      setStatus({
        msg: "Please select a commodity and target market.",
        type: "error",
      });
      return;
    }
    setSearching(true);
    setBuyers([]);
    setIntel(null);
    setHasResults(false);
    setStatus({
      msg: `Searching buyer platforms for ${commodity} importers in ${market}...`,
      type: "running",
    });

    try {
      const res = await fetch("/api/buyer-finder-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commodity, market, buyerType }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setBuyers(data.buyers);
      setHasResults(true);
      setStatus({
        msg: `Step 2/2 — Loading market intelligence...`,
        type: "running",
      });

      const intelRes = await fetch("/api/buyer-finder-intel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commodity, market }),
      });
      const intelData = await intelRes.json();
      setIntel(intelData);
      setStatus({
        msg: `Done — ${data.buyers.length} buyer leads loaded.`,
        type: "done",
      });
    } catch {
      setStatus({ msg: "Search failed. Please try again.", type: "error" });
    }
    setSearching(false);
  };

  // load more
  const loadMore = async () => {
    setSearching(true);
    const excludeNames = buyers.slice(-10).map((b) => b.companyName);
    setStatus({
      msg: `Finding more ${commodity} buyers in ${market}...`,
      type: "running",
    });
    try {
      const res = await fetch("/api/buyer-finder-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commodity, market, buyerType, excludeNames }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setBuyers((prev) => [...prev, ...data.buyers]);
      setStatus({
        msg: `${buyers.length + data.buyers.length} buyer leads loaded.`,
        type: "done",
      });
    } catch {
      setStatus({ msg: "Error. Please try again.", type: "error" });
    }
    setSearching(false);
  };

  // email
  const draftEmail = async (idx: number) => {
    const buyer = buyers[idx];
    if (!buyer) return;
    setModalBuyer(buyer);
    setModalLoading(true);
    setModalOpen(true);
    setModalSubject("");
    setModalBody("");
    try {
      const res = await fetch("/api/buyer-finder-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyer, commodity }),
      });
      const data = await res.json();
      setModalSubject(data.subject);
      setModalBody(data.body);
    } catch {
      setModalBody("Error generating email. Please try again.");
    }
    setModalLoading(false);
  };

  const exportAll = () => {
    let txt = `TALCORA — BUYER INTELLIGENCE\n${"=".repeat(44)}\n${commodity.toUpperCase()} · ${market.toUpperCase()}\n\n`;
    buyers.forEach((b, i) => {
      txt += `${i + 1}. ${b.companyName} | ${b.city}, ${b.country}\n`;
      txt += `   ${b.companyType} | Source: ${b.source || "—"}\n`;
      txt += `   ${b.website || "—"} | ${b.generalEmail || "—"}\n`;
      txt += `   Contact: ${b.contactPerson?.name || "—"} (${b.contactPerson?.title || "—"})\n`;
      txt += `   ${b.contactPerson?.email || "—"} | ${b.contactPerson?.phone || "—"}\n\n`;
    });
    copyText(txt, showToast, `${buyers.length} leads exported!`);
  };

  // ── GATE ──
  if (!authed) {
    return (
      <div className="fixed inset-0 bg-[#080809] flex items-center justify-center p-6 z-[9999]">
        <div className="w-full max-w-[420px] bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.4)] p-10 relative animate-fade-up">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent" />
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[42px] h-[42px] border-[1px] border-[#d4a843] grid place-items-center font-display text-[15px] font-bold text-[#d4a843] relative">
              <span className="absolute inset-1 border-[0.5px] border-[rgba(212,168,67,0.2)]" />
              TX
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-[#d4a843]">
                Talcora
              </div>
              <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#5a5855] mt-0.5">
                Internal Portal
              </div>
            </div>
          </div>
          <div className="font-display text-xl font-semibold text-[#e8e6e0] mb-1.5">
            Team Access Only
          </div>
          <div className="text-sm text-[#5a5855] mb-7 leading-relaxed">
            This buyer intelligence tool is restricted to authorised Talcora
            team members.
          </div>
          <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#5a5855] mb-1.5">
            Password
          </div>
          <div className="relative mb-2">
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && unlock()}
              placeholder="Enter access password"
              className="w-full bg-[#141416] border-[0.5px] border-[rgba(212,168,67,0.15)] focus:border-[#d4a843] text-[#e8e6e0] px-3.5 py-3 pr-12 font-sans text-sm outline-none tracking-widest transition-colors"
            />
            <button
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-[#5a5855] hover:text-[#9a9890] cursor-pointer text-sm"
            >
              👁
            </button>
          </div>
          {pwErr && (
            <div className="font-mono text-[10px] text-[#e05555] mb-4 tracking-wide">
              {pwErr}
            </div>
          )}
          {!pwErr && <div className="mb-4" />}
          <button
            onClick={unlock}
            className="w-full bg-[#d4a843] text-[#080809] border-none py-3.5 font-display text-sm font-bold tracking-widest uppercase cursor-pointer hover:bg-[#f0c060] active:scale-99 transition-all"
          >
            Access Portal →
          </button>
          <div className="mt-6 pt-5 border-t-[0.5px] border-[rgba(212,168,67,0.15)] text-[11px] text-[#5a5855] text-center leading-relaxed">
            🔒 Secured · Talcora Internal Use Only
            <br />
            Contact your administrator if you need access
          </div>
        </div>
      </div>
    );
  }

  // ── APP ──
  return (
    <>
      <div className="min-h-screen bg-[#080809] text-[#e8e6e0] font-sans">
        {/* header */}
        <header className="py-4 border-b-[0.5px] border-[rgba(212,168,67,0.15)] mb-6 sticky top-0 bg-[rgba(8,8,9,0.97)] backdrop-blur-sm z-[100]">
          <div className="max-w-[980px] mx-auto px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] border-[1px] border-[#d4a843] grid place-items-center font-display text-[13px] font-bold text-[#d4a843]">
                TX
              </div>
              <div>
                <div className="font-display text-[15px] font-semibold text-[#d4a843]">
                  Talcora
                </div>
                <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#5a5855] mt-0.5">
                  Buyer Intelligence System
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase text-[#2ecc7a] before:content-[''] before:w-[5px] before:h-[5px] before:bg-[#2ecc7a] before:rounded-full before:animate-pulse">
                Live Search Active
              </span>
              <button
                onClick={() => setAuthed(false)}
                className="font-mono text-[9px] tracking-wide uppercase px-3 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#5a5855] bg-transparent hover:border-[#e05555] hover:text-[#e05555] transition-all cursor-pointer"
              >
                Lock Portal
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-[980px] mx-auto px-5">
          {/* search panel */}
          <div className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.15)] p-5 mb-4 relative">
            <span className="absolute top-0 left-[18px] -translate-y-1/2 bg-[#0f0f11] px-2 font-mono text-[8px] tracking-[0.15em] text-[#7a6020] uppercase">
              Intelligence Parameters
            </span>
            <div className="grid grid-cols-3 gap-3 mb-3.5 max-sm:grid-cols-2">
              {[
                {
                  label: "Commodity",
                  id: "commodity",
                  val: commodity,
                  set: setCommodity,
                  opts: [
                    ["", "Select commodity..."],
                    ["cocoa beans", "Cocoa Beans"],
                    ["sesame seeds", "Sesame Seeds"],
                    ["dried ginger", "Dried Ginger"],
                    ["cashew nuts", "Cashew Nuts"],
                    ["soybeans", "Soybeans"],
                    ["palm oil", "Palm Oil"],
                    ["hibiscus flower", "Hibiscus Flower"],
                    ["shea butter", "Shea Butter"],
                    ["tiger nuts", "Tiger Nuts"],
                    ["moringa", "Moringa"],
                    ["coffee beans", "Coffee Beans"],
                    ["cassava chips", "Cassava Chips"],
                    ["charcoal", "Charcoal"],
                  ],
                },
                {
                  label: "Target Market",
                  id: "market",
                  val: market,
                  set: setMarket,
                  opts: [
                    ["", "Select market..."],
                    ["Germany", "Germany"],
                    ["United Kingdom", "United Kingdom"],
                    ["Netherlands", "Netherlands"],
                    ["France", "France"],
                    ["Spain", "Spain"],
                    ["Italy", "Italy"],
                    ["UAE", "UAE / Dubai"],
                    ["Saudi Arabia", "Saudi Arabia"],
                    ["China", "China"],
                    ["India", "India"],
                    ["Japan", "Japan"],
                    ["Turkey", "Turkey"],
                    ["Belgium", "Belgium"],
                    ["Poland", "Poland"],
                  ],
                },
                {
                  label: "Buyer Type",
                  id: "buyerType",
                  val: buyerType,
                  set: setBuyerType,
                  opts: [
                    ["importer buyer", "All Buyers"],
                    ["food manufacturer processor", "Food Manufacturers"],
                    [
                      "importer wholesaler distributor",
                      "Importers / Wholesalers",
                    ],
                    [
                      "trading company commodity broker",
                      "Trading Companies",
                    ],
                    ["organic natural food buyer", "Organic / Health Food"],
                    [
                      "cosmetic pharmaceutical buyer",
                      "Cosmetics / Pharma",
                    ],
                  ],
                },
              ].map(({ label, id, val, set, opts }) => (
                <div key={id} className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-widest uppercase text-[#5a5855]">
                    {label}
                  </label>
                  <select
                    value={val}
                    onChange={(e) => set(e.target.value)}
                    className="bg-[#141416] border-[0.5px] border-[rgba(212,168,67,0.15)] focus:border-[#d4a843] text-[#e8e6e0] px-3 py-2.5 text-[13px] outline-none appearance-none cursor-pointer transition-colors w-full"
                  >
                    {opts.map(([v, l]) => (
                      <option key={v} value={v} className="bg-[#141416]">
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button
              onClick={runSearch}
              disabled={searching}
              className="w-full bg-[#d4a843] text-[#080809] border-none py-3 font-display text-[12px] font-bold tracking-widest uppercase cursor-pointer hover:bg-[#f0c060] disabled:opacity-35 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2.5"
            >
              <span>Search Buyer Platforms</span>
              <span className="text-base">⚡</span>
            </button>

            <div className="flex items-center gap-2 mt-3.5 pt-3.5 border-t-[0.5px] border-[rgba(212,168,67,0.15)] flex-wrap">
              <span className="font-mono text-[9px] text-[#5a5855] uppercase tracking-wide">
                Searching:
              </span>
              {[
                "Europages",
                "Go4WorldBusiness",
                "TradeKey",
                "Tradewheel",
                "Kompass",
                "LinkedIn",
              ].map((p) => (
                <span
                  key={p}
                  className="font-mono text-[9px] px-2 py-1 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#9a9890]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <StatusBar msg={status.msg} type={status.type} />

          {/* intro state */}
          {!hasResults && (
            <div className="py-12 text-center px-5">
              <div className="font-display text-2xl font-semibold mb-2.5">
                Buyer Intelligence Portal
              </div>
              <div className="text-sm text-[#5a5855] max-w-[480px] mx-auto mb-7 leading-relaxed">
                Search live B2B platforms and get real company profiles with
                direct contacts, LinkedIn links, procurement managers and
                outreach strategies.
              </div>
              <div className="grid grid-cols-3 gap-2.5 max-w-[640px] mx-auto max-sm:grid-cols-2">
                {[
                  ["Europages", "EU B2B trade directory"],
                  ["Go4World", "Global buyer leads"],
                  ["TradeKey", "Live trade listings"],
                  ["Tradewheel", "Import/export platform"],
                  ["Kompass", "B2B company directory"],
                  ["LinkedIn", "Direct contact search"],
                ].map(([name, desc]) => (
                  <div
                    key={name}
                    className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.15)] p-3 text-left"
                  >
                    <div className="font-mono text-[10px] tracking-wide text-[#d4a843] mb-1 uppercase">
                      {name}
                    </div>
                    <div className="text-[11px] text-[#5a5855] leading-relaxed">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* results */}
          {hasResults && (
            <>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2.5">
                <div>
                  <div className="font-display text-xl font-semibold">
                    {commodity.charAt(0).toUpperCase() + commodity.slice(1)}{" "}
                    Buyers — {market}
                  </div>
                  <div className="text-xs text-[#5a5855] mt-1">
                    Europages · TradeKey · Go4World · Tradewheel · Kompass ·
                    LinkedIn
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-mono text-[10px] px-3 py-1 border-[0.5px] border-[rgba(212,168,67,0.4)] text-[#d4a843]">
                    {buyers.length} leads
                  </span>
                  <button
                    onClick={exportAll}
                    className="font-mono text-[9px] tracking-wide uppercase px-3.5 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#9a9890] hover:border-[#d4a843] hover:text-[#d4a843] transition-all"
                  >
                    Export All
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="font-mono text-[9px] tracking-wide uppercase px-3.5 py-1.5 border-[0.5px] border-[rgba(212,168,67,0.15)] text-[#9a9890] hover:border-[#d4a843] hover:text-[#d4a843] transition-all"
                  >
                    Print PDF
                  </button>
                </div>
              </div>

              {buyers.map((b, i) => (
                <BuyerCard
                  key={`${b.companyName}-${i}`}
                  buyer={b}
                  idx={i}
                  commodity={commodity}
                  onEmail={draftEmail}
                  onToast={showToast}
                />
              ))}

              {/* load more */}
              <div className="text-center py-5">
                <button
                  onClick={loadMore}
                  disabled={searching}
                  className="border-[0.5px] border-[rgba(212,168,67,0.4)] text-[#d4a843] font-mono text-[11px] tracking-widest uppercase py-3.5 px-0 w-full max-w-[480px] cursor-pointer hover:bg-[rgba(212,168,67,0.06)] disabled:opacity-40 disabled:cursor-not-allowed transition-all bg-transparent"
                >
                  {searching ? "Searching..." : "↓ Load More Buyers"}
                </button>
                <div className="font-mono text-[10px] text-[#5a5855] mt-2">
                  {buyers.length} buyers loaded — click to find more
                </div>
              </div>

              {/* market intel */}
              {intel && (
                <>
                  <div className="grid grid-cols-2 gap-3 mb-3 max-sm:grid-cols-1">
                    {[
                      {
                        title: "// Market Intelligence",
                        body: intel.marketIntelligence,
                      },
                      {
                        title: "// Certifications Required",
                        body: intel.certificationRequirements,
                      },
                    ].map(({ title, body }) => (
                      <div
                        key={title}
                        className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.15)] p-4"
                      >
                        <div className="font-mono text-[9px] tracking-widest uppercase text-[#7a6020] mb-2.5">
                          {title}
                        </div>
                        <div className="text-[13px] text-[#9a9890] leading-relaxed whitespace-pre-line">
                          {body}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#0f0f11] border-[0.5px] border-[rgba(212,168,67,0.4)] p-[18px] mb-8 relative">
                    <span className="absolute top-0 left-3.5 -translate-y-1/2 bg-[#0f0f11] px-2 font-mono text-[8px] tracking-[0.15em] text-[#d4a843] uppercase">
                      Outreach Strategy
                    </span>
                    <div className="text-[13px] text-[#9a9890] leading-[1.9] whitespace-pre-line">
                      {intel.outreachStrategy}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <EmailModal
        open={modalOpen}
        buyer={modalBuyer}
        subject={modalSubject}
        body={modalBody}
        loading={modalLoading}
        onClose={() => setModalOpen(false)}
        onToast={showToast}
      />
      <Toast msg={toast} />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Inter:wght@300;400;500&display=swap");
        .font-display { font-family: "Syne", sans-serif; }
        .font-mono { font-family: "JetBrains Mono", monospace; }
        .font-sans { font-family: "Inter", sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes ld {
          0%, 100% { opacity: 0.2; transform: scaleY(0.5); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        .animate-fade-up { animation: fade-up 0.4s ease forwards; }
        .animate-fade-in { animation: fade-in 0.2s ease forwards; }
      `}</style>
    </>
  );
}