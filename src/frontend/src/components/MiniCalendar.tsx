import { NANAKSHAHI_MONTHS, usePunjabiDate } from "@/hooks/usePunjabiDate";
import { motion } from "motion/react";

const WEEK_DAYS_SHORT = ["ਐਤ", "ਸੋਮ", "ਮੰਗ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱ", "ਸ਼ਨੀ"];

type Cell = { type: "pad"; pos: number } | { type: "day"; day: number };

export function MiniCalendar() {
  const dateInfo = usePunjabiDate();
  const today = dateInfo.gregorianDate;
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: Cell[] = [];
  for (let i = 0; i < firstDay; i++) cells.push({ type: "pad", pos: i });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ type: "day", day: d });

  const punjabiMonthInfo = NANAKSHAHI_MONTHS[dateInfo.nanakshahiMonth];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-card border border-border p-5 w-full"
    >
      {/* Header */}
      <div className="text-center mb-4">
        <div
          className="font-punjabi text-xl font-bold text-navy"
          style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
        >
          {punjabiMonthInfo.pa}
        </div>
        <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase mt-0.5">
          {punjabiMonthInfo.translit} · {dateInfo.monthName} {year}
        </div>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 mb-2">
        {WEEK_DAYS_SHORT.map((d) => (
          <div
            key={d}
            className="text-center text-[10px] font-semibold text-muted-foreground py-1"
            style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((cell) => (
          <div
            key={cell.type === "pad" ? `pad-${cell.pos}` : `day-${cell.day}`}
            className="flex items-center justify-center"
          >
            {cell.type === "day" && (
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                  ${
                    cell.day === today.getDate()
                      ? "bg-navy text-white font-bold shadow-md"
                      : "text-foreground hover:bg-beige cursor-default"
                  }`}
              >
                {cell.day}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Nanakshahi date indicator */}
      <div className="mt-4 pt-3 border-t border-border text-center">
        <span className="text-xs text-muted-foreground">ਨਾਨਕਸ਼ਾਹੀ ਸੰਮਤ</span>
        <span className="text-xs font-semibold text-navy ml-2">
          {dateInfo.nanakshahiYear}
        </span>
      </div>
    </motion.div>
  );
}
