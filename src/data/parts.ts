export interface Part {
  name: string;
  brand: string;
  category: string;
}

export const categories = [
  'Oleje i filtry',
  'Hamulce',
  'Zawieszenie',
  'Elektryka',
  'Osprzęt silnika',
  'Akumulatory',
  'Układ chłodzenia',
] as const;

export type Category = (typeof categories)[number];

export const parts: Part[] = [
  // Oleje i filtry
  { name: 'Olej silnikowy 5W-30 Longlife III 5L', brand: 'Castrol', category: 'Oleje i filtry' },
  { name: 'Olej silnikowy 5W-40 Edge 5L', brand: 'Castrol', category: 'Oleje i filtry' },
  { name: 'Olej silnikowy 0W-30 Evolution 5L', brand: 'Motul', category: 'Oleje i filtry' },
  { name: 'Olej silnikowy 5W-40 8100 X-cess 5L', brand: 'Motul', category: 'Oleje i filtry' },
  { name: 'Filtr oleju W 712/75', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr oleju W 811/80', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr powietrza C 30130', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr powietrza C 35008', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr kabinowy CU 2939', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr kabinowy węglowy CUK 29005', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Filtr paliwa WK 939/2', brand: 'Mann+Hummel', category: 'Oleje i filtry' },
  { name: 'Olej przekładniowy 75W-90 GL-5 1L', brand: 'Motul', category: 'Oleje i filtry' },

  // Hamulce
  { name: 'Klocki hamulcowe przód BP2370', brand: 'TRW', category: 'Hamulce' },
  { name: 'Klocki hamulcowe przód GDB1673', brand: 'TRW', category: 'Hamulce' },
  { name: 'Klocki hamulcowe tył BP2398', brand: 'TRW', category: 'Hamulce' },
  { name: 'Tarcza hamulcowa przód DF4056', brand: 'TRW', category: 'Hamulce' },
  { name: 'Tarcza hamulcowa tył DF4060', brand: 'TRW', category: 'Hamulce' },
  { name: 'Klocki hamulcowe przód P 85 100', brand: 'Brembo', category: 'Hamulce' },
  { name: 'Tarcza hamulcowa wentylowana 09.A348.11', brand: 'Brembo', category: 'Hamulce' },
  { name: 'Płyn hamulcowy DOT 4 LV 500 ml', brand: 'Bosch', category: 'Hamulce' },
  { name: 'Przewód hamulcowy elastyczny PHH330', brand: 'TRW', category: 'Hamulce' },
  { name: 'Zacisk hamulcowy remanufaktured BHW391E', brand: 'TRW', category: 'Hamulce' },

  // Zawieszenie
  { name: 'Amortyzator przód SENSA-TRAC 339021', brand: 'Monroe', category: 'Zawieszenie' },
  { name: 'Amortyzator tył ORIGINAL 16805', brand: 'Monroe', category: 'Zawieszenie' },
  { name: 'Tuleja stabilizatora przednia', brand: 'Febi', category: 'Zawieszenie' },
  { name: 'Łącznik stabilizatora przód', brand: 'Febi', category: 'Zawieszenie' },
  { name: 'Sworzeń wahacza dolnego', brand: 'SKF', category: 'Zawieszenie' },
  { name: 'Łożysko koła przód VKBA 3651', brand: 'SKF', category: 'Zawieszenie' },
  { name: 'Łożysko koła tył VKBA 3580', brand: 'SKF', category: 'Zawieszenie' },
  { name: 'Zestaw naprawczy wahacza', brand: 'Febi', category: 'Zawieszenie' },
  { name: 'Drążek kierowniczy zewnętrzny', brand: 'TRW', category: 'Zawieszenie' },
  { name: 'Sprężyna zawieszenia przednia', brand: 'Sachs', category: 'Zawieszenie' },
  { name: 'Podpora amortyzatora z łożyskiem', brand: 'SKF', category: 'Zawieszenie' },

  // Elektryka
  { name: 'Świeca zapłonowa FR7DC+ (4 szt.)', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Świeca zapłonowa iridium FR7KI332S', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Świeca żarowa GSE 107', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Świeca zapłonowa LFR5A-11 (4 szt.)', brand: 'NGK', category: 'Elektryka' },
  { name: 'Świeca zapłonowa iridium ILKAR7L11 (4 szt.)', brand: 'NGK', category: 'Elektryka' },
  { name: 'Cewka zapłonowa 0 986 221 023', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Alternator remanufaktured 0 986 041 500', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Rozrusznik remanufaktured 0 986 019 540', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Czujnik tlenu (lambda) LSF 4.2', brand: 'Bosch', category: 'Elektryka' },
  { name: 'Czujnik ABS tylny VKPC 88620', brand: 'SKF', category: 'Elektryka' },
  { name: 'Pompka paliwa elektryczna 0 580 314 072', brand: 'Bosch', category: 'Elektryka' },

  // Osprzęt silnika
  { name: 'Pasek rozrządu 1987948519', brand: 'Bosch', category: 'Osprzęt silnika' },
  { name: 'Zestaw rozrządu z pompą wody', brand: 'SKF', category: 'Osprzęt silnika' },
  { name: 'Pasek klinowy wielorowkowy 6PK1548', brand: 'Contitech', category: 'Osprzęt silnika' },
  { name: 'Napinacz paska rozrządu', brand: 'Sachs', category: 'Osprzęt silnika' },
  { name: 'Napinacz paska wielorowkowego', brand: 'Bosch', category: 'Osprzęt silnika' },
  { name: 'Sprzęgło z kołem zamachowym (komplet)', brand: 'LUK', category: 'Osprzęt silnika' },
  { name: 'Dwumasowe koło zamachowe', brand: 'LUK', category: 'Osprzęt silnika' },
  { name: 'Tarcza sprzęgła 624 3107 00', brand: 'LUK', category: 'Osprzęt silnika' },
  { name: 'Uszczelka głowicy HG8027', brand: 'Elring', category: 'Osprzęt silnika' },
  { name: 'Uszczelka pokrywy zaworów', brand: 'Elring', category: 'Osprzęt silnika' },
  { name: 'Filtr paliwa benzynowy GF-399', brand: 'Bosch', category: 'Osprzęt silnika' },

  // Akumulatory
  { name: 'Akumulator S4 005 60Ah 540A', brand: 'Bosch', category: 'Akumulatory' },
  { name: 'Akumulator S4 008 74Ah 680A', brand: 'Bosch', category: 'Akumulatory' },
  { name: 'Akumulator S5 008 77Ah 780A EFB', brand: 'Bosch', category: 'Akumulatory' },
  { name: 'Akumulator S5 A08 70Ah 760A AGM', brand: 'Bosch', category: 'Akumulatory' },
  { name: 'Akumulator Dynamic 60Ah 540A', brand: 'Valeo', category: 'Akumulatory' },
  { name: 'Akumulator Blue Dynamic E43 72Ah 680A', brand: 'Varta', category: 'Akumulatory' },

  // Układ chłodzenia
  { name: 'Pompa wody WP7210', brand: 'SKF', category: 'Układ chłodzenia' },
  { name: 'Pompa wody WP0198', brand: 'Valeo', category: 'Układ chłodzenia' },
  { name: 'Termostat 82°C', brand: 'Wahler', category: 'Układ chłodzenia' },
  { name: 'Wąż chłodnicy górny', brand: 'Febi', category: 'Układ chłodzenia' },
  { name: 'Wąż chłodnicy dolny', brand: 'Febi', category: 'Układ chłodzenia' },
  { name: 'Chłodnica silnika aluminiowa', brand: 'Valeo', category: 'Układ chłodzenia' },
  { name: 'Płyn chłodzący -35°C G12+ 1L', brand: 'Castrol', category: 'Układ chłodzenia' },
  { name: 'Korek zbiornika wyrównawczego', brand: 'Febi', category: 'Układ chłodzenia' },
  { name: 'Zbiornik wyrównawczy płynu chłodzącego', brand: 'Febi', category: 'Układ chłodzenia' },
];
