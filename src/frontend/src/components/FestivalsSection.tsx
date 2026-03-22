import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const FESTIVALS = [
  {
    id: 1,
    name: "ਵੈਸਾਖੀ",
    nameEn: "Vaisakhi",
    date: "14 ਅਪ੍ਰੈਲ",
    dateEn: "April 14",
    desc: "ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਤਿਉਹਾਰ — ਫ਼ਸਲ ਦੀ ਕਟਾਈ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਦਾ ਦਿਨ।",
    descEn:
      "Punjab's biggest festival — harvest celebration and founding of the Khalsa Panth.",
    featured: true,
    color: "from-amber-100 to-orange-50",
    icon: "🌾",
  },
  {
    id: 2,
    name: "ਦੀਵਾਲੀ",
    nameEn: "Diwali",
    date: "ਕੱਤਕ ਅਮਾਵਸ",
    dateEn: "Kattak Amavas",
    desc: "ਰੌਸ਼ਨੀਆਂ ਦਾ ਤਿਉਹਾਰ। ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਸਜਾਵਟ।",
    descEn:
      "Festival of lights with special illumination at Sri Harmandir Sahib.",
    featured: false,
    color: "from-yellow-50 to-amber-50",
    icon: "🪔",
  },
  {
    id: 3,
    name: "ਲੋਹੜੀ",
    nameEn: "Lohri",
    date: "13 ਜਨਵਰੀ",
    dateEn: "January 13",
    desc: "ਸਰਦੀਆਂ ਦੇ ਅੰਤ ਦਾ ਜਸ਼ਨ, ਅਲਾਓ ਤੇ ਨੱਚਣਾ ਗਾਉਣਾ।",
    descEn:
      "Celebration of the end of winter solstice with bonfire and folk dances.",
    featured: false,
    color: "from-red-50 to-orange-50",
    icon: "🔥",
  },
];

export function FestivalsSection() {
  return (
    <section className="py-16 px-4 bg-cream" aria-label="Festivals Section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-navy mb-2"
            style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
          >
            ਤਿਉਹਾਰ ਅਤੇ ਪੁਰਬ
          </h2>
          <p className="text-muted-foreground text-base">
            Festivals &amp; Significant Events · ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦਾ ਜਸ਼ਨ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FESTIVALS.map((festival, i) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={festival.featured ? "md:col-span-1 row-span-1" : ""}
              data-ocid={`festivals.item.${festival.id}`}
            >
              <Card
                className={`h-full border-border shadow-card bg-gradient-to-br ${festival.color} hover:shadow-hero transition-shadow duration-300`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-3">{festival.icon}</div>
                  <div className="mb-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      {festival.dateEn}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-navy mb-1"
                    style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                  >
                    {festival.name}
                  </h3>
                  <p className="text-sm font-semibold text-navy/70 mb-2">
                    {festival.nameEn}
                  </p>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed flex-1"
                    style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                  >
                    {festival.desc}
                  </p>
                  {festival.featured && (
                    <span className="mt-4 inline-block bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                      ✦ ਮੁੱਖ ਤਿਉਹਾਰ
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
