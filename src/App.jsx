import React, { useState } from "react";
import {
  Home 
  Heart 
  Users 
  User
  X
  MapPin
  ShieldCheck
  BadgeCheck
  MessageCircle
  Phone
  Video
  Coffee
  Star
  Ruler
  Briefcase
  ChevronLeft
  AlertTriangle
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
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-slate-100 flex justify-around py-2 px-1 z-30">
      {items.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl transition-colors"
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.4 : 1.8}
              className={isActive ? "text-rose-500" : "text-slate-400"}
            />
            <span
              className={`text-[11px] ${
                isActive ? "text-rose-500 font-medium" : "text-slate-400"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 1 — Landing / Onboarding                                     */
/* ------------------------------------------------------------------ */

function LandingScreen({ onPick }) {
  return (
    <div className="px-5 pt-8 pb-28">
      <div className="mb-8">
        <h1 className="text-[26px] font-bold text-slate-900 leading-tight">
          satutemu
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Ruang yang aman untuk mencari pasangan atau teman ngobrol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => onPick("matchmaker")}
          className="text-left bg-rose-500 rounded-3xl p-5 relative overflow-hidden active:scale-[0.98] transition-transform"
        >
          <Heart className="text-rose-200 absolute -right-3 -bottom-3" size={90} strokeWidth={1} />
          <p className="text-rose-100 text-xs font-medium mb-1">Fitur satu</p>
          <h2 className="text-white text-lg font-semibold mb-1.5">
            Cari Pasangan
          </h2>
          <p className="text-rose-50 text-sm max-w-[220px]">
            Cocokkan profil, saling suka, lalu lanjut ngobrol di luar aplikasi.
          </p>
        </button>

        <button
          onClick={() => onPick("talents")}
          className="text-left bg-slate-900 rounded-3xl p-5 relative overflow-hidden active:scale-[0.98] transition-transform"
        >
          <Users className="text-slate-700 absolute -right-3 -bottom-3" size={90} strokeWidth={1} />
          <p className="text-slate-400 text-xs font-medium mb-1">Fitur dua</p>
          <h2 className="text-white text-lg font-semibold mb-1.5">
            Sewa Teman Ngobrol
          </h2>
          <p className="text-slate-300 text-sm max-w-[220px]">
            Chat, telepon, atau video call dengan teman pilihanmu, per menit.
          </p>
        </button>
      </div>

      <div className="mt-8">
        <p className="text-slate-400 text-xs font-medium mb-2.5">
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
              className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-3.5 py-2.5"
            >
              <Icon size={16} className="text-rose-500 shrink-0" />
              <span className="text-slate-700 text-sm">{text}</span>
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
    <div className="px-5 pt-6 pb-28 relative">
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Cari Pasangan</h2>
      <p className="text-slate-500 text-sm mb-4">
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
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-500 border-slate-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* card stack */}
      <div className="relative h-[440px]">
        <div className="absolute inset-0 bg-slate-100 rounded-3xl translate-y-3 scale-[0.96]" />
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.photo})` }}
        >
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 p-5 text-white">
            <div className="flex items-center gap-1.5 mb-1">
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <span className="text-lg font-light">{profile.age}</span>
            </div>
            <div className="flex items-center gap-1 text-white/80 text-xs mb-2">
              <MapPin size={13} />
              {profile.location}
            </div>
            <p className="text-sm text-white/90 leading-snug">{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePass}
          className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
        >
          <X size={24} className="text-slate-400" />
        </button>
        <button
          onClick={handleLike}
          className="w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-200 active:scale-95 transition-transform"
        >
          <Heart size={28} className="text-white" fill="white" />
        </button>
        <button className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center shadow-sm active:scale-95 transition-transform relative">
          <MessageCircle size={22} className="text-white" />
          <span className="absolute -top-1 -right-1 bg-amber-400 text-[9px] font-bold text-slate-900 px-1 rounded-full">
            PRO
          </span>
        </button>
      </div>

      {/* match modal */}
      {showMatch && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 px-6">
          <div className="bg-white rounded-3xl p-6 w-full max-w-[380px] text-center">
            <Heart size={40} className="text-rose-500 mx-auto mb-3" fill="#F43F5E" />
            <h3 className="text-xl font-bold text-slate-900 mb-1">Cocok!</h3>
            <p className="text-slate-500 text-sm mb-5">
              Kamu dan {profile.name} sama-sama saling suka.
            </p>
            <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-between mb-4">
              <span className="text-slate-700 text-sm font-medium">
                @{profile.name.toLowerCase()}_official
              </span>
              <button
                onClick={() => setCopied(true)}
                className="text-rose-500 flex items-center gap-1 text-xs font-medium"
              >
                <Copy size={14} />
                {copied ? "Tersalin" : "Salin"}
              </button>
            </div>
            <button
              onClick={nextAfterMatch}
              className="w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium"
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
    <div className="fixed inset-0 bg-white z-40 overflow-y-auto max-w-[480px] mx-auto">
      <div className="px-5 pt-6 pb-28">
        <button onClick={onClose} className="mb-4 text-slate-500">
          <ChevronLeft size={22} />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center text-2xl font-semibold text-slate-500">
            {talent.name[0]}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{talent.name}</h2>
            <div className="flex items-center gap-1 text-amber-500 text-sm">
              <Star size={14} fill="#f59e0b" />
              {talent.rating}
            </div>
            <span
              className={`inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full ${
                talent.status === "online"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {talent.status === "online" ? "Sedang online" : "Sedang sibuk"}
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4">{talent.bio}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {talent.hobbies.map((h) => (
            <span key={h} className="text-xs bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-xs font-medium mb-2">Daftar Layanan</p>
        <div className="flex flex-col gap-2">
          {services.map(({ key, label, icon: Icon, price }) => (
            <div
              key={key}
              className="flex items-center justify-between bg-slate-50 rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-slate-500" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500">{price}</p>
                </div>
              </div>
              <button
                onClick={() => handleBook(key)}
                className="text-xs font-medium bg-slate-900 text-white px-3.5 py-1.5 rounded-full"
              >
                Booking
              </button>
            </div>
          ))}
        </div>
      </div>

      {showSafety && (
        <div className="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 px-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-[420px]">
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4 sm:hidden" />
            <AlertTriangle className="text-amber-500 mb-3" size={26} />
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Sebelum lanjut booking
            </h3>
            <ul className="text-slate-600 text-sm space-y-1.5 mb-5 list-disc pl-4">
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
                className="flex-1 border border-slate-200 text-slate-600 rounded-xl py-2.5 text-sm font-medium"
              >
                Batal
              </button>
              <button
                onClick={() => setShowSafety(false)}
                className="flex-1 bg-rose-500 text-white rounded-xl py-2.5 text-sm font-medium"
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
    <div className="px-5 pt-6 pb-28">
      <h2 className="text-lg font-semibold text-slate-900 mb-1">Teman Ngobrol</h2>
      <p className="text-slate-500 text-sm mb-4">Chat, telepon, video, atau ketemu langsung.</p>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-4 -mx-5 px-5">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={`shrink-0 text-xs font-medium px-3.5 py-1.5 rounded-full border ${
              category === c.key
                ? "bg-rose-500 text-white border-rose-500"
                : "bg-white text-slate-500 border-slate-200"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t)}
            className="text-left bg-white border border-slate-100 rounded-2xl p-3.5 shadow-sm"
          >
            <div className="relative w-full aspect-square rounded-xl bg-slate-200 mb-2.5 flex items-center justify-center text-xl font-semibold text-slate-500">
              {t.name[0]}
              <span
                className={`absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                  t.status === "online" ? "bg-emerald-400" : "bg-slate-300"
                }`}
              />
            </div>
            <p className="text-sm font-medium text-slate-900">{t.name}</p>
            <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
              <Star size={11} fill="#f59e0b" />
              {t.rating}
            </div>
            <p className="text-xs text-slate-500">{rupiah(t.rates.chat)}/jam chat</p>
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
    <div className="px-5 pt-6 pb-28">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Akun</h2>
      <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4 mb-5">
        <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-500">
          A
        </div>
        <div>
          <p className="font-medium text-slate-900 text-sm">Akun Kamu</p>
          <span className="inline-flex items-center gap-1 text-emerald-600 text-xs">
            <BadgeCheck size={13} /> Terverifikasi
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {["Preferensi Matchmaker", "Riwayat Booking", "Pusat Bantuan & Laporan", "Pengaturan Privasi"].map(
          (label) => (
            <button
              key={label}
              className="text-left text-sm text-slate-700 px-4 py-3.5 rounded-xl hover:bg-slate-50"
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

  const screens = {
    home: <LandingScreen onPick={setTab} />,
    matchmaker: <MatchmakerScreen />,
    talents: <TalentsScreen />,
    profile: <ProfileScreen />,
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center">
      <div className="w-full max-w-[480px] bg-white min-h-screen relative">
        {screens[tab]}
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  );
}
