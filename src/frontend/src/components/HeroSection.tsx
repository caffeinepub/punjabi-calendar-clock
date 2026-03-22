import { usePunjabiDate } from "@/hooks/usePunjabiDate";
import { motion } from "motion/react";
import { MiniCalendar } from "./MiniCalendar";

export function HeroSection() {
  const dateInfo = usePunjabiDate();

  return (
    <section
      className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-16 px-4 overflow-hidden"
      aria-label="Hero Clock Section"
    >
      {/* Background image with blur overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/punjabi-hero-sunrise.dim_1920x600.jpg')",
          filter: "blur(2px) brightness(0.7)",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Time display */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Big clock */}
          <div
            className="font-display font-black text-white leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(64px, 12vw, 108px)",
              textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
            data-ocid="clock.display"
          >
            <span>{dateInfo.hours}</span>
            <span className="animate-pulse mx-1 opacity-80">:</span>
            <span>{dateInfo.minutes}</span>
            <span className="animate-pulse mx-1 opacity-80">:</span>
            <span className="text-beige/90">{dateInfo.seconds}</span>
          </div>

          {/* Day and date */}
          <motion.div
            className="mt-3 text-white/90 font-semibold tracking-widest uppercase text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {dateInfo.fullDateString}
          </motion.div>

          {/* Punjabi day + month */}
          <motion.div
            className="mt-2 flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span
              className="text-beige font-bold text-2xl md:text-3xl"
              style={{
                fontFamily: "'Noto Sans Gurmukhi', sans-serif",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              {dateInfo.dayNamePunjabi}
            </span>
            <span className="text-white/60 text-xl">·</span>
            <span
              className="text-beige font-bold text-2xl md:text-3xl"
              style={{
                fontFamily: "'Noto Sans Gurmukhi', sans-serif",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              {dateInfo.monthNamePunjabi}
            </span>
            <span className="text-white/70 text-lg font-medium">
              ({dateInfo.monthTranslit} · ਸੰਮਤ {dateInfo.nanakshahiYear})
            </span>
          </motion.div>
        </motion.div>

        {/* Two cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
          {/* Mini Calendar */}
          <MiniCalendar />

          {/* Date Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-card border border-border p-5 flex flex-col justify-between"
            data-ocid="date.card"
          >
            <div>
              <div className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">
                ਅੱਜ ਦੀ ਤਾਰੀਖ਼
              </div>

              {/* Nanakshahi date large */}
              <div className="flex items-baseline gap-2 mb-4">
                <span
                  className="text-6xl font-black text-navy leading-none"
                  style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                >
                  {dateInfo.nanakshahiDay}
                </span>
                <div className="flex flex-col">
                  <span
                    className="text-xl font-bold text-navy"
                    style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                  >
                    {dateInfo.monthNamePunjabi}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {dateInfo.monthTranslit}
                  </span>
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-beige text-navy text-xs font-semibold px-3 py-1 rounded-full">
                  ਸੰਮਤ {dateInfo.nanakshahiYear}
                </span>
                <span className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {dateInfo.dayName}
                </span>
                <span className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {dateInfo.monthName} {dateInfo.dayOfMonth},{" "}
                  {dateInfo.gregorianDate.getFullYear()}
                </span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="mt-5 flex items-center gap-2 pt-4 border-t border-border">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">
                ਲਾਈਵ ਸਮਾਂ · Live Time
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
