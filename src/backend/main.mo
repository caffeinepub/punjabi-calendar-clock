import Time "mo:core/Time";

actor {
  type Month = {
    name : Text;
    transliteration : Text;
  };

  type Day = {
    name : Text;
    transliteration : Text;
  };

  let months : [Month] = [
    {
      name = "ਚੇਤ";
      transliteration = "Chet";
    },
    {
      name = "ਵਿਸਾਖ";
      transliteration = "Vaisakh";
    },
    {
      name = "ਜੇਠ";
      transliteration = "Jeth";
    },
    {
      name = "ਹਾੜ੍ਹ";
      transliteration = "Harh";
    },
    {
      name = "ਸਾਵਣ";
      transliteration = "Sawan";
    },
    {
      name = "ਭਾਦੋਂ";
      transliteration = "Bhadon";
    },
    {
      name = "ਅਸੂ";
      transliteration = "Assu";
    },
    {
      name = "ਕੱਤਕ";
      transliteration = "Katak";
    },
    {
      name = "ਮੱਘਰ";
      transliteration = "Maghar";
    },
    {
      name = "ਪੋਹ";
      transliteration = "Poh";
    },
    {
      name = "ਮਾਘ";
      transliteration = "Magh";
    },
    {
      name = "ਫੱਗਣ";
      transliteration = "Phagan";
    },
  ];

  let days : [Day] = [
    {
      name = "ਐਤਵਾਰ";
      transliteration = "Aitvaar";
    },
    {
      name = "ਸੋਮਵਾਰ";
      transliteration = "Somvaar";
    },
    {
      name = "ਮੰਗਲਵਾਰ";
      transliteration = "Mangalvaar";
    },
    {
      name = "ਬੁਧਵਾਰ";
      transliteration = "Budhvaar";
    },
    {
      name = "ਵੀਰਵਾਰ";
      transliteration = "Veervaar";
    },
    {
      name = "ਸ਼ੁੱਕਰਵਾਰ";
      transliteration = "Shukravar";
    },
    {
      name = "ਸ਼ਨਿੱਚਰਵਾਰ";
      transliteration = "Shanicharvaar";
    },
  ];

  public query ({ caller }) func getMonths() : async [Month] {
    months;
  };

  public query ({ caller }) func getDays() : async [Day] {
    days;
  };

  public shared ({ caller }) func getCurrentTime() : async Int {
    Time.now();
  };
};
