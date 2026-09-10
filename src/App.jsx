import React, { useState, useEffect } from "react";
import {
  Home,
  Heart,
  Users,
  User,
  X,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  Phone,
  Video,
  Coffee,
  Star,
  Copy,
  ChevronLeft,
  AlertTriangle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Design tokens (modern-warm): kept as CSS variables on the root element */
/* ------------------------------------------------------------------ */

// Fonts will be injected at runtime so this single-file change keeps everything self-contained.
const GOOGLE_FONTS =
  "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700;900&family=Inter:wght@300;400;600;700&display=swap";

/* ------------------------------------------------------------------ */
/* Mock data                                                          */
/* ------------------------------------------------------------------ */

const PROFILES = [
  {
    id: 1,
    name: "Rani",
    age: 24,
    location: "Medan, Sumatera Utara",
    bio: "Suka kopi susu dan diskusi film. Lagi cari teman ngobrol yang serius.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    name: "Dimas",
    age: 27,
    location: "Binjai, Sumatera Utara",
    bio: "Kerja di bidang IT, hobi mendaki. Mencari pasangan yang suka petualangan.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
  },
];

const TALENTS = [
  {
    id: 1,
    name: "Sasa",
    rating: 4.9,
    status: "online",
    tags: ["chat", "voice"],
    rates: { chat: 15000, voice: 3000, video: 5000, meetup: 100000 },
    bio: "Suka mendengarkan cerita, gampang diajak diskusi apa saja.",
    hobbies: ["Musik", "Nonton drama", "Kuliner"],
  },
  {
    id: 2,
    name: "Bimo",
    rating: 4.8,
    status: "busy",
    tags: ["voice", "video", "meetup"],
    rates: { chat: 12000, voice: 3500, video: 6000, meetup: 120000 },
    bio: "Teman ngobrol santai, cocok buat curhat soal kerjaan atau kuliah.",
    hobbies: ["Basket", "Podcast", "Fotografi"],
  },
];

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "chat", label: "Chat" },
  { key: "voice", label: "Voice Call" },
  { key: "video", label: "Video Call" },
  { key: "meetup", label: "Ketemu Langsung" },
];

const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

/* ------------------------------------------------------------------ */
/* Bottom Navigation                                                   */
/* ------------------------------------------------------------------ */

function BottomNav({ active, onChange }) {
  const items = [
    { key: "home", label: "Beranda", icon: Home },
    { key: "matchmaker", label: "Cocokkan", icon: Heart },
    { key: "talents", label: "Teman", icon: Users },
    { key: "profile", label: "Akun", icon: User },
  ];
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-30 px-4">
      <div className="bg-[#FBF6EE] border border-[#EDE2D6] rounded-3xl flex items-center justify-between py-2 px-3 shadow-[0_6px_20px_rgba(189,160,146,0.12)]">
        {items.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="flex-1 flex flex-col items-center gap-1 py-1 px-2 relative"
            >
              <span
                className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                  isActive ? "bg-[#D96C63] shadow-[0_6px_12px_rgba(217,108,99,0.16)]" : "bg-white"
                }`}
                aria-hidden
              >
                <Icon size={18} className={isActive ? "text-white" : "text-[#8E796E]"} />
              </span>
              <span className={`text-[11px] ${isActive ? "text-[#5B3E2B] font-medium" : "text-[#8E796E]"}`}>
                {label}
              </span>
              {/* active indicator */}
              {isActive && <span className="absolute -bottom-3 w-10 h-1.5 rounded-full bg-[#D96C63]/80" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 1 — Landing / Onboarding                                     */
/* ------------------------------------------------------------------ */

function LandingScreen({ onPick }) {
  return (
    <div className="px-6 pt-10 pb-28">
      <div className="mb-6">
        <h1 className="text-[28px] leading-tight" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>
          satutemu
        </h1>
        <p className="text-sm mt-1 text-[#8E796E]" style={{ fontFamily: "Inter, sans-serif" }}>
          Ruang yang aman untuk mencari pasangan atau teman ngobrol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Hero feature — made more prominent, editorial */}
        <button
          onClick={() => onPick("matchmaker")}
          className="relative overflow-hidden rounded-[28px] p-6 text-left active:scale-[0.995] transition-transform"
          style={{ background: "linear-gradient(180deg, rgba(217,108,99,0.12), rgba(217,108,99,0.06))", boxShadow: "0 12px 30px rgba(189,160,146,0.10)" }}
        >
          <Heart className="absolute -right-6 -bottom-6 opacity-20" size={120} strokeWidth={1} />
          <p className="text-xs font-medium mb-1 text-[#A56F66]" style={{ fontFamily: "Inter, sans-serif" }}>
            Fitur unggulan
          </p>
          <h2 className="text-lg mb-1.5" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>
            Cari Pasangan
          </h2>
          <p className="text-sm text-[#6E5B52] max-w-[260px]" style={{ fontFamily: "Inter, sans-serif" }}>
            Cocokkan profil, saling suka, lalu lanjut ngobrol di luar aplikasi.
          </p>
        </button>

        {/* Secondary feature — smaller, tile-like with clay surface */}
        <button
          onClick={() => onPick("talents")}
          className="text-left rounded-xl p-4 flex items-start gap-3 active:scale-[0.995] transition-transform"
          style={{ background: "#CDB4A4" }}
        >
          <div className="w-14 h-14 rounded-xl bg-[#EDE2D6] flex items-center justify-center text-xl font-semibold text-[#8E796E]">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-[#7F6B63] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Fitur lain</p>
            <h3 className="text-md" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>
              Sewa Teman Ngobrol
            </h3>
            <p className="text-sm text-[#6E5B52] max-w-[220px]" style={{ fontFamily: "Inter, sans-serif" }}>
              Chat, telepon, atau video call dengan teman pilihanmu, per menit.
            </p>
          </div>
        </button>
      </div>

      <div className="mt-8">
        <p className="text-xs font-medium mb-2.5 text-[#8E796E]" style={{ fontFamily: "Inter, sans-serif" }}>
          Kenapa satutemu
        </p>
        <div className="flex flex-col gap-2">
          {[
            { icon: ShieldCheck, text: "Semua profil terverifikasi manual" },
            { icon: X, text: "Tidak ada konten dewasa / NSFW" },
            { icon: BadgeCheck, text: "Matchmaker khusus pria–wanita" },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl px-3.5 py-3"
              style={{ background: "rgba(255,255,255,0.6)" }}
            >
              <Icon size={16} className="text-[#D96C63] shrink-0" />
              <span className="text-sm text-[#5B3E2B]" style={{ fontFamily: "Inter, sans-serif" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 2 — Matchmaker                                                */
/* (visual redesign only — logic intact)                                */
/* ------------------------------------------------------------------ */

function MatchmakerScreen() {
  const [lookingFor, setLookingFor] = useState("wanita"); // user-chosen preference, not identity policing
  const [index, setIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [copied, setCopied] = useState(false);

  const profile = PROFILES[index % PROFILES.length];

  const handlePass = () => setIndex((i) => i + 1);
  const handleLike = () => {
    // demo: every like results in a mutual match
    setShowMatch(true);
  };
  const nextAfterMatch = () => {
    setShowMatch(false);
    setCopied(false);
    setIndex((i) => i + 1);
  };

  return (
    <div className="px-6 pt-6 pb-28 relative">
      <h2 className="text-lg font-semibold mb-1" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>Cari Pasangan</h2>
      <p className="text-sm mb-4 text-[#8E796E]" style={{ fontFamily: "Inter, sans-serif" }}>
        Matchmaker heteroseksual — pria & wanita saja.
      </p>

      {/* preference selector */}
      <div className="flex gap-2 mb-4">
        {[
          { key: "wanita", label: "Pria cari Wanita" },
          { key: "pria", label: "Wanita cari Pria" },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => setLookingFor(opt.key)}
            className={`flex-1 text-xs font-medium py-2 rounded-full border transition-colors ${
              lookingFor === opt.key
                ? "bg-[#5B3E2B] text-white border-[#5B3E2B]"
                : "bg-white text-[#8E796E] border-[#EDE2D6]"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* editorial card (single profile view but styled editorial) */}
      <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-[0_14px_40px_rgba(189,160,146,0.12)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.photo})` }}
        />
        <div className="absolute inset-x-6 bottom-6 p-4 rounded-2xl" style={{ backdropFilter: "blur(6px)", background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35))" }}>
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-2xl" style={{ fontFamily: "Fraunces, serif", color: "#FBF6EE" }}>{profile.name}</h3>
              <div className="text-sm text-[#E0A84A] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{profile.age} • {profile.location}</div>
            </div>
            <div className="text-sm text-[#FBF6EE]" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className={`inline-block px-2 py-1 rounded-full text-xs`} style={{ background: "rgba(91,62,43,0.12)" }}>{profile.bio.slice(0,20)}...</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#FBF6EE]" style={{ fontFamily: "Inter, sans-serif" }}>{profile.bio}</p>
        </div>
      </div>

      {/* actions */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePass}
          className="w-14 h-14 rounded-full bg-white border border-[#EDE2D6] flex items-center justify-center shadow-sm active:scale-95 transition-transform"
        >
          <X size={20} className="text-[#8E796E]" />
        </button>
        <button
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-[#D96C63] flex items-center justify-center shadow-[0_10px_24px_rgba(217,108,99,0.18)] active:scale-95 transition-transform"
        >
          <Heart size={26} className="text-white" fill="white" />
        </button>
        <button className="w-14 h-14 rounded-full bg-[#5B3E2B] flex items-center justify-center shadow-sm active:scale-95 transition-transform relative">
          <MessageCircle size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-[#E0A84A] text-[9px] font-bold text-[#5B3E2B] px-1 rounded-full">PRO</span>
        </button>
      </div>

      {/* match modal */}
      {showMatch && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 px-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-[420px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            <Heart size={40} className="text-[#D96C63] mx-auto mb-3" fill="#D96C63" />
            <h3 className="text-xl font-bold text-[#5B3E2B] mb-1" style={{ fontFamily: "Fraunces, serif" }}>Cocok!</h3>
            <p className="text-[#8E796E] text-sm mb-5">Kamu dan {profile.name} sama-sama saling suka.</p>
            <div className="bg-[#FBF6EE] rounded-2xl p-3 flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-[#5B3E2B]">@{profile.name.toLowerCase()}_official</span>
              <button
                onClick={() => setCopied(true)}
                className="text-[#D96C63] flex items-center gap-1 text-xs font-medium"
              >
                <Copy size={14} />
                {copied ? "Tersalin" : "Salin"}
              </button>
            </div>
            <button
              onClick={nextAfterMatch}
              className="w-full bg-[#5B3E2B] text-white rounded-xl py-3 text-sm font-medium"
            >
              Lanjut Cari
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 3 — Talents directory + detail                               */
/* ------------------------------------------------------------------ */

function TalentDetail({ talent, onClose }) {
  const [showSafety, setShowSafety] = useState(false);
  const [pendingService, setPendingService] = useState(null);

  const services = [
    { key: "chat", label: "Chat", icon: MessageCircle, price: `${rupiah(talent.rates.chat)}/jam` },
    { key: "voice", label: "Voice Call", icon: Phone, price: `${rupiah(talent.rates.voice)}/menit` },
    { key: "video", label: "Video Call", icon: Video, price: `${rupiah(talent.rates.video)}/menit` },
    { key: "meetup", label: "Ketemu Langsung", icon: Coffee, price: `${rupiah(talent.rates.meetup)}/jam` },
  ];

  const handleBook = (key) => {
    setPendingService(key);
    setShowSafety(true);
  };

  return (
    <div className="fixed inset-0 bg-white z-40 overflow-y-auto max-w-[480px] mx-auto" style={{ boxShadow: "0 30px 60px rgba(189,160,146,0.12)" }}>
      <div className="px-6 pt-6 pb-28">
        <button onClick={onClose} className="mb-4 text-[#8E796E]">
          <ChevronLeft size={22} />
        </button>

        {/* large cover photo */}
        <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-[0_12px_28px_rgba(189,160,146,0.12)]">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${talent.photo || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop'})` }} />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>{talent.name}</h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="inline-flex items-center gap-1 text-amber-500 text-sm">
              <Star size={14} fill="#E0A84A" />
              <span className="text-sm text-[#5B3E2B]">{talent.rating}</span>
            </div>
            <span className={`inline-block text-xs px-2 py-1 rounded-full`} style={{ background: "rgba(224,168,74,0.12)", color: "#5B3E2B" }}>{talent.status === "online" ? "Sedang online" : "Sedang sibuk"}</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4" style={{ color: "#6E5B52", fontFamily: "Inter, sans-serif" }}>{talent.bio}</p>

        <div className="flex flex-wrap gap-2.5 mb-6">
          {talent.hobbies.map((h) => (
            <span key={h} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(217,108,99,0.06)", color: "#D96C63", fontFamily: "Inter, sans-serif" }}>{h}</span>
          ))}
        </div>

        <p className="text-xs font-medium mb-2" style={{ color: "#8E796E", fontFamily: "Inter, sans-serif" }}>Daftar Layanan</p>
        <div className="flex flex-col gap-3 mb-6">
          {services.map(({ key, label, icon: Icon, price }) => (
            <div key={key} className="flex items-center justify-between rounded-2xl px-4 py-3" style={{ background: "#FBF6EE" }}>
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-[#8E796E]" />
                <div>
                  <p className="text-sm font-medium text-[#5B3E2B]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
                  <p className="text-xs text-[#8E796E]">{price}</p>
                </div>
              </div>
              <button
                onClick={() => handleBook(key)}
                className="text-xs font-medium bg-[#5B3E2B] text-white px-3.5 py-1.5 rounded-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Booking
              </button>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp — uses provided number but styled to app palette (not WhatsApp green) */}
        <div className="mb-8">
          <a
            href={`https://wa.me/6289529178826`}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold"
            style={{ background: "#E0A84A", color: "white", textDecoration: "none", fontFamily: "Inter, sans-serif" }}
          >
            <Phone size={18} className="text-white" />
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {showSafety && (
        <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 px-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-[420px]">
            <div className="w-10 h-1 bg-[#EDE2D6] rounded-full mx-auto mb-4 sm:hidden" />
            <AlertTriangle className="text-amber-500 mb-3" size={26} />
            <h3 className="text-base font-semibold text-[#5B3E2B] mb-2" style={{ fontFamily: "Fraunces, serif" }}>
              Sebelum lanjut booking
            </h3>
            <ul className="text-[#6E5B52] text-sm space-y-1.5 mb-5 list-disc pl-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <li>Tidak ada konten dewasa / NSFW dalam bentuk apa pun.</li>
              {pendingService === "meetup" && (
                <>
                  <li>Pertemuan offline wajib di tempat umum (kafe, mal, restoran).</li>
                  <li>Jangan bagikan alamat rumah sebelum pembayaran dikonfirmasi lewat aplikasi.</li>
                </>
              )}
              <li>Laporkan langsung lewat aplikasi bila merasa tidak aman.</li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSafety(false)}
                className="flex-1 border border-[#EDE2D6] text-[#6E5B52] rounded-xl py-2.5 text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Batal
              </button>
              <button
                onClick={() => setShowSafety(false)}
                className="flex-1 bg-[#D96C63] text-white rounded-xl py-2.5 text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TalentsScreen() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    category === "all" ? TALENTS : TALENTS.filter((t) => t.tags.includes(category));

  return (
    <div className="px-6 pt-6 pb-28">
      <h2 className="text-lg font-semibold mb-1" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>Teman Ngobrol</h2>
      <p className="text-sm mb-4 text-[#8E796E]" style={{ fontFamily: "Inter, sans-serif" }}>Chat, telepon, video, atau ketemu langsung.</p>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-4 -mx-6 px-6">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={`shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border ${
              category === c.key
                ? "bg-[#D96C63] text-white border-[#D96C63]"
                : "bg-white text-[#8E796E] border-[#EDE2D6]"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t)}
            className="text-left rounded-2xl p-3.5 shadow-[0_10px_24px_rgba(189,160,146,0.08)]"
            style={{ background: "#FBF6EE" }}
          >
            <div className="relative w-full aspect-square rounded-xl mb-3 overflow-hidden flex items-center justify-center text-xl font-semibold text-[#8E796E]">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${t.photo || ''})` }} />
              <span
                className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full border-2 border-white ${
                  t.status === "online" ? "bg-emerald-400" : "bg-[#EDE2D6]"
                }`}
              />
            </div>
            <p className="text-sm font-medium text-[#5B3E2B]" style={{ fontFamily: "Fraunces, serif" }}>{t.name}</p>
            <div className="flex items-center gap-2 text-xs mt-1">
              <Star size={12} fill="#E0A84A" />
              <span className="text-xs text-[#5B3E2B]">{t.rating}</span>
            </div>
            <p className="text-xs text-[#8E796E] mt-1">{rupiah(t.rates.chat)}/jam chat</p>
          </button>
        ))}
      </div>

      {selected && <TalentDetail talent={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 4 — Profile / Settings (minimal placeholder)                */
/* ------------------------------------------------------------------ */

function ProfileScreen() {
  return (
    <div className="px-6 pt-6 pb-28">
      <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "Fraunces, serif", color: "#5B3E2B" }}>Akun</h2>
      <div className="flex items-center gap-3 bg-[#FBF6EE] rounded-2xl p-4 mb-5">
        <div className="w-14 h-14 rounded-full bg-[#EDE2D6] flex items-center justify-center font-semibold text-[#8E796E]">A</div>
        <div>
          <p className="font-medium text-[#5B3E2B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Akun Kamu</p>
          <span className="inline-flex items-center gap-1 text-[#5B3E2B] text-xs">
            <BadgeCheck size={13} /> Terverifikasi
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {["Preferensi Matchmaker", "Riwayat Booking", "Pusat Bantuan & Laporan", "Pengaturan Privasi"].map(
          (label) => (
            <button
              key={label}
              className="text-left text-sm text-[#5B3E2B] px-4 py-3.5 rounded-xl hover:bg-[#FBF6EE]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Root App                                                            */
/* ------------------------------------------------------------------ */

export default function App() {
  const [tab, setTab] = useState("home");

  useEffect(() => {
    // inject fonts once at runtime so headings/bodies render as requested
    if (!document.querySelector(`link[href="${GOOGLE_FONTS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = GOOGLE_FONTS;
      document.head.appendChild(link);
    }
  }, []);

  const screens = {
    home: <LandingScreen onPick={setTab} />,
    matchmaker: <MatchmakerScreen />,
    talents: <TalentsScreen />,
    profile: <ProfileScreen />,
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }} className="min-h-screen bg-[#FBF6EE] flex justify-center">
      <div className="w-full max-w-[480px] bg-white min-h-screen relative" style={{ background: "white" }}>
        {screens[tab]}
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  );
}
