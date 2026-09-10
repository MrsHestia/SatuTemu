import React, { useState } from "react";
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
      <div className="bg-warmBase border border-neutralSoft rounded-3xl flex items-center justify-between py-2 px-3 shadow-warm-md">
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
                  isActive ? "bg-primary shadow-[0_6px_12px_rgba(217,108,99,0.16)]" : "bg-white"
                }`}
                aria-hidden
              >
                <Icon size={18} className={isActive ? "text-white" : "text-[#8E796E]"} />
              </span>
              <span className={`text-[11px] ${isActive ? "text-cocoa font-medium" : "text-[#8E796E]"}`}>
                {label}
              </span>
              {/* active indicator */}
              {isActive && <span className="absolute -bottom-3 w-10 h-1.5 rounded-full bg-primary/80" />}
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
        <h1 className="text-[28px] leading-tight h-fraunces text-cocoa">satutemu</h1>
        <p className="text-sm mt-1 text-[#8E796E] font-sans">Ruang yang aman untuk mencari pasangan atau teman ngobrol.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Hero feature — made more prominent, editorial */}
        <button
          onClick={() => onPick("matchmaker")}
          className="relative overflow-hidden rounded-[28px] p-6 text-left active:scale-[0.995] transition-transform"
          style={{ background: "linear-gradient(180deg, rgba(217,108,99,0.12), rgba(217,108,99,0.06))" }}
        >
          <Heart className="absolute -right-6 -bottom-6 opacity-20" size={120} strokeWidth={1} />
          <p className="text-xs font-medium mb-1 text-[#A56F66] font-sans">Fitur unggulan</p>
          <h2 className="text-lg mb-1.5 h-fraunces text-cocoa">Cari Pasangan</h2>
          <p className="text-sm text-[#6E5B52] max-w-[260px] font-sans">Cocokkan profil, saling suka, lalu lanjut ngobrol di luar aplikasi.</p>
        </button>

        {/* Secondary feature — smaller, tile-like with clay surface */}
        <button
          onClick={() => onPick("talents")}
          className="text-left rounded-xl p-4 flex items-start gap-3 active:scale-[0.995] transition-transform"
          style={{ background: "#CDB4A4" }}
        >
          <div className="w-14 h-14 rounded-xl bg-neutralSoft flex items-center justify-center text-xl font-semibold text-[#8E796E]">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-[#7F6B63] mb-1 font-sans">Fitur lain</p>
            <h3 className="text-md h-fraunces text-cocoa">Sewa Teman Ngobrol</h3>
            <p className="text-sm text-[#6E5B52] max-w-[220px] font-sans">Chat, telepon, atau video call dengan teman pilihanmu, per menit.</p>
          </div>
        </button>
      </div>

      <div className="mt-8">
        <p className="text-xs font-medium mb-2.5 text-[#8E796E] font-sans">Kenapa satutemu</p>
        <div className="flex flex-col gap-2">
          {[
            { icon: ShieldCheck, text: "Semua profil terverifikasi manual" },
            { icon: X, text: "Tidak ada konten dewasa / NSFW" },
            { icon: BadgeCheck, text: "Matchmaker khusus pria–wanita" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl px-3.5 py-3" style={{ background: "rgba(255,255,255,0.6)" }}>
              <Icon size={16} className="text-primary shrink-0" />
              <span className="text-sm text-cocoa font-sans">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 2 — Matchmaker                                                */
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
      <h2 className="text-lg font-semibold mb-1 h-fraunces text-cocoa">Cari Pasangan</h2>
      <p className="text-sm mb-4 text-[#8E796E] font-sans">Matchmaker heteroseksual — pria & wanita saja.</p>

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
                ? "bg-cocoa text-white border-cocoa"
                : "bg-white text-[#8E796E] border-neutralSoft"
            } font-sans`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* editorial card (single profile view but styled editorial) */}
      <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-warm-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.photo})` }}
        />
        <div className="absolute inset-x-6 bottom-6 p-4 rounded-2xl bg-[rgba(0,0,0,0.18)]">
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-2xl h-fraunces text-warmBase">{profile.name}</h3>
              <div className="text-sm text-amber mt-1 font-sans">{profile.age} • {profile.location}</div>
            </div>
            <div className="text-sm text-warmBase font-sans">
              <span className={`inline-block px-2 py-1 rounded-full text-xs bg-[rgba(91,62,43,0.12)]`}>{profile.bio.slice(0,20)}...</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-warmBase font-sans">{profile.bio}</p>
        </div>
      </div>



      {/* actions */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePass}
          className="w-14 h-14 rounded-full bg-white border border-neutralSoft flex items-center justify-center shadow-sm active:scale-95 transition-transform"
        >
          <X size={20} className="text-[#8E796E]" />
        </button>
        <button
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_10px_24px_rgba(217,108,99,0.18)] active:scale-95 transition-transform"
        >
          <Heart size={26} className="text-white" fill="white" />
        </button>
        <button className="w-14 h-14 rounded-full bg-cocoa flex items-center justify-center shadow-sm active:scale-95 transition-transform relative">
          <MessageCircle size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-amber text-[9px] font-bold text-cocoa px-1 rounded-full">PRO</span>
        </button>
      </div>

      {/* match modal */}
      {showMatch && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 px-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-[420px] text-center font-sans">
            <Heart size={40} className="text-primary mx-auto mb-3" fill="#D96C63" />
            <h3 className="text-xl font-bold text-cocoa mb-1 h-fraunces">Cocok!</h3>
            <p className="text-[#8E796E] text-sm mb-5">Kamu dan {profile.name} sama-sama saling suka.</p>
            <div className="bg-warmBase rounded-2xl p-3 flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-cocoa">@{profile.name.toLowerCase()}_official</span>
              <button
                onClick={() => setCopied(true)}
                className="text-primary flex items-center gap-1 text-xs font-medium"
              >
                <Copy size={14} />
                {copied ? "Tersalin" : "Salin"}
              </button>
            </div>
            <button
              onClick={nextAfterMatch}
              className="w-full bg-cocoa text-white rounded-xl py-3 text-sm font-medium"
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
    <div className="fixed inset-0 bg-white z-40 overflow-y-auto max-w-[480px] mx-auto shadow-warm-lg">
      <div className="px-6 pt-6 pb-28">
        <button onClick={onClose} className="mb-4 text-[#8E796E]">
          <ChevronLeft size={22} />
        </button>

        {/* large cover photo */}
        <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-warm-md">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${talent.photo || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop'})` }} />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold h-fraunces text-cocoa">{talent.name}</h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="inline-flex items-center gap-1 text-amber text-sm">
              <Star size={14} fill="#E0A84A" />
              <span className="text-sm text-cocoa">{talent.rating}</span>
            </div>
            <span className={`inline-block text-xs px-2 py-1 rounded-full`} style={{ background: "rgba(224,168,74,0.12)", color: "#5B3E2B" }}>{talent.status === "online" ? "Sedang online" : "Sedang sibuk"}</span>
          </div>
        </div>



        <p className="text-slate-600 text-sm mb-4 text-[#6E5B52] font-sans">{talent.bio}</p>

        <div className="flex flex-wrap gap-2.5 mb-6">
          {talent.hobbies.map((h) => (
            <span key={h} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(217,108,99,0.06)", color: "#D96C63" }}>{h}</span>
          ))}
        </div>

{