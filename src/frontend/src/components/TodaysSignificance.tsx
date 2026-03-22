import { usePunjabiDate } from "@/hooks/usePunjabiDate";
import { motion } from "motion/react";

const MONTH_SIGNIFICANCE: Record<string, { pa: string; en: string }> = {
  Chet: {
    pa: "ਚੇਤ ਦਾ ਮਹੀਨਾ ਬਸੰਤ ਰੁੱਤ ਦਾ ਸੁਆਗਤ ਕਰਦਾ ਹੈ। ਕੁਦਰਤ ਨਵੀਂ ਜ਼ਿੰਦਗੀ ਨਾਲ ਖਿੜਦੀ ਹੈ, ਫੁੱਲ ਖਿੜਦੇ ਹਨ ਅਤੇ ਪੰਛੀ ਗਾਉਂਦੇ ਹਨ।",
    en: "The month of Chet welcomes the spring season. Nature blooms with new life, flowers blossom and birds sing.",
  },
  Vaisakh: {
    pa: "ਵੈਸਾਖ ਮਹੀਨੇ ਵਿੱਚ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਹੋਈ। ਕਿਸਾਨ ਫ਼ਸਲ ਦੀ ਕਟਾਈ ਕਰਦੇ ਅਤੇ ਖ਼ੁਸ਼ੀਆਂ ਮਨਾਉਂਦੇ ਹਨ।",
    en: "The Khalsa Panth was founded in Vaisakh. Farmers harvest their crops and celebrate with joy.",
  },
  Jeth: {
    pa: "ਜੇਠ ਮਹੀਨੇ ਵਿੱਚ ਗਰਮੀ ਆਪਣੇ ਸਿਖਰ 'ਤੇ ਹੁੰਦੀ ਹੈ। ਸ਼ਰਧਾਲੂ ਧਾਰਮਿਕ ਅਸਥਾਨਾਂ 'ਤੇ ਜਾ ਕੇ ਸ਼ਾਂਤੀ ਲੱਭਦੇ ਹਨ।",
    en: "Heat peaks in Jeth. Devotees seek peace at religious shrines and places of worship.",
  },
  Haar: {
    pa: "ਹਾੜ ਵਿੱਚ ਮਾਨਸੂਨ ਦੀ ਉਡੀਕ ਹੁੰਦੀ ਹੈ। ਧਰਤੀ ਮੀਂਹ ਦੇ ਪਹਿਲੇ ਕਤਰੇ ਦੀ ਤਾਂਘ ਨਾਲ ਭਰੀ ਹੁੰਦੀ ਹੈ।",
    en: "Haar awaits the monsoon. The earth longs for the first drops of rain.",
  },
  Saavan: {
    pa: "ਸਾਵਣ ਮਹੀਨੇ ਵਿੱਚ ਬਾਰਸ਼ਾਂ ਧਰਤੀ ਨੂੰ ਹਰਿਆ-ਭਰਿਆ ਕਰ ਦਿੰਦੀਆਂ ਹਨ। ਇਹ ਖ਼ੁਸ਼ੀ ਅਤੇ ਤਿਉਹਾਰਾਂ ਦਾ ਮਹੀਨਾ ਹੈ।",
    en: "Rains in Saavan make the earth green and lush. This is a month of joy and celebration.",
  },
  Bhadon: {
    pa: "ਭਾਦੋਂ ਮਹੀਨਾ ਕ੍ਰਿਸ਼ਨ ਜਨਮਾਸ਼ਟਮੀ ਦਾ ਸਮਾਂ ਹੈ। ਖੇਤ ਫ਼ਸਲਾਂ ਨਾਲ ਲਹਿਲਹਾਉਂਦੇ ਹਨ।",
    en: "Bhadon is the time of Janmashtami. Fields wave with ripening crops.",
  },
  Assu: {
    pa: "ਅੱਸੂ ਵਿੱਚ ਨਵਰਾਤਰੇ ਅਤੇ ਦੁਸਹਿਰੇ ਦੀ ਖ਼ੁਸ਼ੀ ਹੁੰਦੀ ਹੈ। ਮੌਸਮ ਵਿੱਚ ਠੰਡਕ ਆਉਣ ਲੱਗਦੀ ਹੈ।",
    en: "Assu brings the joy of Navratri and Dussehra. The weather starts cooling down.",
  },
  Kattak: {
    pa: "ਕੱਤਕ ਮਹੀਨੇ ਵਿੱਚ ਦੀਵਾਲੀ ਮਨਾਈ ਜਾਂਦੀ ਹੈ। ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਉਤਸਵ ਵੀ ਇਸੇ ਮਹੀਨੇ ਹੁੰਦਾ ਹੈ।",
    en: "Diwali is celebrated in Kattak. Guru Nanak Dev Ji's Prakash Utsav also falls in this month.",
  },
  Maghar: {
    pa: "ਮੱਘਰ ਵਿੱਚ ਸਰਦੀ ਦਾ ਅਸਲ ਆਗਮਨ ਹੁੰਦਾ ਹੈ। ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਸਰੋਵਰਾਂ ਵਿੱਚ ਠੰਡੇ ਪਾਣੀ ਦੀ ਇਸ਼ਨਾਨ ਦੀ ਮਹੱਤਤਾ ਹੁੰਦੀ ਹੈ।",
    en: "Real winter arrives in Maghar. A holy dip in the cold waters of Amritsar's sarovars is considered sacred.",
  },
  Poh: {
    pa: "ਪੋਹ ਮਹੀਨੇ ਵਿੱਚ ਸ਼੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮਦਿਨ ਆਉਂਦਾ ਹੈ। ਚਾਰ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਨੂੰ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
    en: "Guru Gobind Singh Ji's birth anniversary falls in Poh. The shaheedi of the four Sahibzaade is remembered.",
  },
  Maagh: {
    pa: "ਮਾਘ ਵਿੱਚ ਮਾਘੀ ਦਾ ਮੇਲਾ ਲੱਗਦਾ ਹੈ। ਸ਼੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਵਿਖੇ ਲੱਖਾਂ ਸ਼ਰਧਾਲੂ ਇਕੱਤਰ ਹੁੰਦੇ ਹਨ।",
    en: "The Maghi Mela is held in Maagh. Hundreds of thousands of devotees gather at Sri Muktsar Sahib.",
  },
  Phagun: {
    pa: "ਫੱਗਣ ਮਹੀਨੇ ਵਿੱਚ ਹੋਲੀ ਅਤੇ ਹੋਲਾ ਮਹੱਲਾ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਵਿਸ਼ਾਲ ਸਮਾਗਮ ਹੁੰਦੇ ਹਨ।",
    en: "Holi and Hola Mohalla are celebrated in Phagun. Grand events take place at Anandpur Sahib.",
  },
};

export function TodaysSignificance() {
  const dateInfo = usePunjabiDate();
  const sig =
    MONTH_SIGNIFICANCE[dateInfo.monthTranslit] || MONTH_SIGNIFICANCE.Phagun;

  return (
    <section
      className="py-16 px-4 bg-background"
      aria-label="Today's Significance"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-navy mb-1"
            style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
          >
            ਅੱਜ ਦੀ ਮਹੱਤਤਾ
          </h2>
          <p className="text-muted-foreground text-sm mb-6 font-medium">
            Today's Significance · {dateInfo.monthTranslit}{" "}
            {dateInfo.nanakshahiDay}
          </p>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch rounded-full bg-beige flex-shrink-0" />
              <div className="space-y-3">
                <p
                  className="text-base md:text-lg text-navy leading-relaxed"
                  style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                >
                  {sig.pa}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {sig.en}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
