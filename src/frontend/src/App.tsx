import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Clock, Download, Settings } from "lucide-react";
import { motion } from "motion/react";
import { FestivalsSection } from "./components/FestivalsSection";
import { HeroSection } from "./components/HeroSection";
import { TodaysSignificance } from "./components/TodaysSignificance";
import { usePunjabiDate } from "./hooks/usePunjabiDate";

const NAV_LINKS = [
  { label: "ਡੈਸ਼ਬੋਰਡ", labelEn: "Dashboard", icon: Clock, active: true },
  { label: "ਕੈਲੰਡਰ", labelEn: "Calendar", icon: Calendar, active: false },
  { label: "ਤਿਉਹਾਰ", labelEn: "Festivals", icon: BookOpen, active: false },
  { label: "ਸੈਟਿੰਗਜ਼", labelEn: "Settings", icon: Settings, active: false },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 flex-shrink-0"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
            <span
              className="text-white text-xs font-bold"
              style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
            >
              ਪੰ
            </span>
          </div>
          <span
            className="text-lg font-bold text-navy hidden sm:block"
            style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
          >
            ਪੰਜਾਬੀ ਕੈਲੰਡਰ
          </span>
        </motion.div>

        {/* Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.labelEn}
              data-ocid={`nav.${link.labelEn.toLowerCase()}.link`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                link.active
                  ? "bg-beige text-navy"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <link.icon className="w-3.5 h-3.5" />
              <span>{link.labelEn}</span>
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-beige text-navy text-xs font-bold">
              SG
            </AvatarFallback>
          </Avatar>
          <Button
            size="sm"
            className="bg-navy text-white hover:bg-navy/90 gap-1.5 hidden sm:flex"
            data-ocid="header.download_button"
          >
            <Download className="w-3.5 h-3.5" />
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
}

function MonthsBar() {
  const dateInfo = usePunjabiDate();
  const months = [
    { pa: "ਚੇਤ", en: "Chet" },
    { pa: "ਵੈਸਾਖ", en: "Vaisakh" },
    { pa: "ਜੇਠ", en: "Jeth" },
    { pa: "ਹਾੜ", en: "Haar" },
    { pa: "ਸਾਵਣ", en: "Saavan" },
    { pa: "ਭਾਦੋਂ", en: "Bhadon" },
    { pa: "ਅੱਸੂ", en: "Assu" },
    { pa: "ਕੱਤਕ", en: "Kattak" },
    { pa: "ਮੱਘਰ", en: "Maghar" },
    { pa: "ਪੋਹ", en: "Poh" },
    { pa: "ਮਾਘ", en: "Maagh" },
    { pa: "ਫੱਗਣ", en: "Phagun" },
  ];

  return (
    <section
      className="bg-navy py-3 px-4 overflow-x-auto"
      aria-label="Nanakshahi Months"
    >
      <div className="flex items-center gap-2 min-w-max mx-auto max-w-5xl">
        {months.map((m, i) => (
          <div
            key={m.en}
            data-ocid={`months.item.${i + 1}`}
            className={`flex flex-col items-center px-3 py-1.5 rounded-lg cursor-default transition-colors ${
              m.en === dateInfo.monthTranslit
                ? "bg-beige/20 border border-beige/40"
                : "hover:bg-white/5"
            }`}
          >
            <span
              className={`text-sm font-bold ${
                m.en === dateInfo.monthTranslit ? "text-beige" : "text-white/70"
              }`}
              style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
            >
              {m.pa}
            </span>
            <span
              className={`text-[10px] ${m.en === dateInfo.monthTranslit ? "text-beige/80" : "text-white/40"}`}
            >
              {m.en}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  const cols = [
    {
      title: "ਜਾਣਕਾਰੀ",
      links: ["ਸਾਡੇ ਬਾਰੇ", "ਸੰਪਰਕ", "ਗੋਪਨੀਯਤਾ"],
    },
    {
      title: "ਕੈਲੰਡਰ",
      links: ["ਨਾਨਕਸ਼ਾਹੀ", "ਬਿਕ੍ਰਮੀ", "ਗ੍ਰੈਗੋਰੀਅਨ"],
    },
    {
      title: "ਤਿਉਹਾਰ",
      links: ["ਵੈਸਾਖੀ", "ਦੀਵਾਲੀ", "ਲੋਹੜੀ", "ਹੋਲਾ ਮਹੱਲਾ"],
    },
    {
      title: "ਐਪ",
      links: ["Android", "iOS", "API"],
    },
  ];

  return (
    <footer
      className="text-white py-12 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(18 0.06 240), oklch(30 0.07 240))",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm font-bold text-white/90 mb-3"
                style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <span
                      className="text-sm text-white/60 hover:text-white cursor-pointer transition-colors"
                      style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                    >
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stay Connected */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-sm text-white/70"
              style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
            >
              ਜੁੜੇ ਰਹੋ · Stay Connected
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="ਆਪਣੀ ਈਮੇਲ ਦਰਜ ਕਰੋ"
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-3 py-2 rounded-lg w-52 focus:outline-none focus:ring-2 focus:ring-beige/50"
              data-ocid="footer.input"
              style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
            />
            <Button
              size="sm"
              className="bg-beige text-navy hover:bg-beige/90 font-semibold"
              data-ocid="footer.submit_button"
            >
              ਭੇਜੋ
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {year} ਪੰਜਾਬੀ ਕੈਲੰਡਰ · Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MonthsBar />
        <TodaysSignificance />
        <FestivalsSection />
      </main>
      <Footer />
    </div>
  );
}
