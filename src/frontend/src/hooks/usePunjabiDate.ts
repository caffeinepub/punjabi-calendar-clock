import { useEffect, useState } from "react";

export interface PunjabiDateInfo {
  time: string;
  seconds: string;
  hours: string;
  minutes: string;
  dayName: string;
  dayNamePunjabi: string;
  monthName: string;
  monthNamePunjabi: string;
  monthTranslit: string;
  dayOfMonth: number;
  nanakshahiYear: number;
  nanakshahiMonth: number;
  nanakshahiDay: number;
  gregorianDate: Date;
  fullDateString: string;
}

const PUNJABI_DAYS = [
  { en: "Sunday", pa: "ਐਤਵਾਰ", translit: "Aitvaar" },
  { en: "Monday", pa: "ਸੋਮਵਾਰ", translit: "Somvaar" },
  { en: "Tuesday", pa: "ਮੰਗਲਵਾਰ", translit: "Mangalvaar" },
  { en: "Wednesday", pa: "ਬੁੱਧਵਾਰ", translit: "Budhvaar" },
  { en: "Thursday", pa: "ਵੀਰਵਾਰ", translit: "Veervaar" },
  { en: "Friday", pa: "ਸ਼ੁੱਕਰਵਾਰ", translit: "Shukkarvaar" },
  { en: "Saturday", pa: "ਸ਼ਨੀਵਾਰ", translit: "Shaneevaar" },
];

const NANAKSHAHI_MONTHS = [
  { idx: 0, pa: "ਚੇਤ", translit: "Chet", gregMonth: 3, gregDay: 14 },
  { idx: 1, pa: "ਵੈਸਾਖ", translit: "Vaisakh", gregMonth: 4, gregDay: 14 },
  { idx: 2, pa: "ਜੇਠ", translit: "Jeth", gregMonth: 5, gregDay: 15 },
  { idx: 3, pa: "ਹਾੜ", translit: "Haar", gregMonth: 6, gregDay: 15 },
  { idx: 4, pa: "ਸਾਵਣ", translit: "Saavan", gregMonth: 7, gregDay: 16 },
  { idx: 5, pa: "ਭਾਦੋਂ", translit: "Bhadon", gregMonth: 8, gregDay: 16 },
  { idx: 6, pa: "ਅੱਸੂ", translit: "Assu", gregMonth: 9, gregDay: 15 },
  { idx: 7, pa: "ਕੱਤਕ", translit: "Kattak", gregMonth: 10, gregDay: 15 },
  { idx: 8, pa: "ਮੱਘਰ", translit: "Maghar", gregMonth: 11, gregDay: 14 },
  { idx: 9, pa: "ਪੋਹ", translit: "Poh", gregMonth: 12, gregDay: 14 },
  { idx: 10, pa: "ਮਾਘ", translit: "Maagh", gregMonth: 1, gregDay: 13 },
  { idx: 11, pa: "ਫੱਗਣ", translit: "Phagun", gregMonth: 2, gregDay: 12 },
];

function getNanakshahiDate(date: Date): {
  month: (typeof NANAKSHAHI_MONTHS)[0];
  day: number;
  year: number;
} {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Create comparable date value (month * 100 + day)
  const dateVal = month * 100 + day;

  // Find which Nanakshahi month we're in
  // Order the months chronologically in terms of Gregorian dates within a year
  // Starts in March, wraps around Jan/Feb
  const starts = [
    { gregMonth: 3, gregDay: 14, nIdx: 0 },
    { gregMonth: 4, gregDay: 14, nIdx: 1 },
    { gregMonth: 5, gregDay: 15, nIdx: 2 },
    { gregMonth: 6, gregDay: 15, nIdx: 3 },
    { gregMonth: 7, gregDay: 16, nIdx: 4 },
    { gregMonth: 8, gregDay: 16, nIdx: 5 },
    { gregMonth: 9, gregDay: 15, nIdx: 6 },
    { gregMonth: 10, gregDay: 15, nIdx: 7 },
    { gregMonth: 11, gregDay: 14, nIdx: 8 },
    { gregMonth: 12, gregDay: 14, nIdx: 9 },
  ];

  // Jan/Feb months
  const wrappedStarts = [
    { gregMonth: 1, gregDay: 13, nIdx: 10 },
    { gregMonth: 2, gregDay: 12, nIdx: 11 },
  ];

  let currentNIdx = 11; // default Phagun for Feb before 12
  let startDate: Date;

  if (month >= 3) {
    // March or later
    for (const s of starts) {
      const sVal = s.gregMonth * 100 + s.gregDay;
      if (dateVal >= sVal) {
        currentNIdx = s.nIdx;
        startDate = new Date(year, s.gregMonth - 1, s.gregDay);
      }
    }
    if (dateVal < 314) {
      // Before Chet, so in Phagun of previous year
      currentNIdx = 11;
      startDate = new Date(year, 1, 12); // Feb 12
    }
  } else {
    // Jan or Feb
    for (const s of wrappedStarts) {
      const sVal = s.gregMonth * 100 + s.gregDay;
      if (dateVal >= sVal) {
        currentNIdx = s.nIdx;
        startDate = new Date(year, s.gregMonth - 1, s.gregDay);
      }
    }
    if (dateVal < 113) {
      // Before Maagh (Jan 13), so still in Poh
      currentNIdx = 9;
      startDate = new Date(year - 1, 11, 14); // Dec 14 of prev year
    }
  }

  const monthInfo = NANAKSHAHI_MONTHS[currentNIdx];
  const realStartDate =
    startDate! || new Date(year, monthInfo.gregMonth - 1, monthInfo.gregDay);
  const nDay =
    Math.floor(
      (date.getTime() - realStartDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

  // Nanakshahi year: starts on Vaisakh 1 = April 14
  // Year 1 = April 14, 1469
  let nYear: number;
  if (month > 4 || (month === 4 && day >= 14)) {
    nYear = year - 1468;
  } else {
    nYear = year - 1469;
  }

  return { month: monthInfo, day: Math.max(1, nDay), year: nYear };
}

export function usePunjabiDate(): PunjabiDateInfo {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");

  const dayInfo = PUNJABI_DAYS[now.getDay()];
  const nanakshahi = getNanakshahiDate(now);

  const gregorianMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    time: `${h}:${m}:${s}`,
    hours: h,
    minutes: m,
    seconds: s,
    dayName: dayInfo.en,
    dayNamePunjabi: dayInfo.pa,
    monthName: gregorianMonths[now.getMonth()],
    monthNamePunjabi: nanakshahi.month.pa,
    monthTranslit: nanakshahi.month.translit,
    dayOfMonth: now.getDate(),
    nanakshahiYear: nanakshahi.year,
    nanakshahiMonth: nanakshahi.month.idx,
    nanakshahiDay: nanakshahi.day,
    gregorianDate: now,
    fullDateString: `${dayInfo.en}, ${gregorianMonths[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
  };
}

export { NANAKSHAHI_MONTHS, PUNJABI_DAYS };
