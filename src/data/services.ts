export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
  longDescription: string;
  includes: string[];
  duration: string;
  faq: ServiceFaq[];
}

export const services: Service[] = [
  {
    title: 'Mechanika ogólna',
    description: 'Naprawy silnika, wymiana rozrządów, sprzęgieł i elementów układu napędowego.',
    icon: 'wrench',
    slug: 'mechanika-ogolna',
    longDescription:
      'Mechanika ogólna to fundament naszego warsztatu. Nasi mechanicy z ponad 18-letnim doświadczeniem przeprowadzają pełen zakres napraw — od wymiany rozrządu, przez naprawę układu napędowego, po generalne remonty silników. Pracujemy na częściach oryginalnych oraz sprawdzonych zamiennikach marek dostępnych w naszym sklepie. Każda naprawa jest dokumentowana i objęta gwarancją serwisową.',
    includes: [
      'Wymiana rozrządu i łańcucha rozrządu',
      'Naprawa i regeneracja silnika',
      'Wymiana sprzęgła i dwumasowego koła zamachowego',
      'Serwis skrzyni biegów (manualna i automatyczna)',
      'Wymiana oleju silnikowego i filtrów',
      'Przeglądy okresowe zgodne z harmonogramem producenta',
      'Wymiana uszczelnień i uszczelek',
    ],
    duration: 'Od 1 godziny (wymiana oleju) do kilku dni roboczych (remont silnika)',
    faq: [
      {
        q: 'Jak często powinienem wymieniać olej silnikowy?',
        a: 'Zalecamy wymianę oleju co 10 000–15 000 km lub raz w roku, w zależności od rodzaju oleju i warunków eksploatacji. Przy jeździe miejskiej lub starszych silnikach warto skrócić ten interwał.',
      },
      {
        q: 'Czy wymiana rozrządu jest konieczna?',
        a: 'Tak. Zerwanie paska lub łańcucha rozrządu prowadzi do kosztownego remontu lub złomowania silnika. Wymiany należy dokonać zgodnie z harmonogramem producenta, zazwyczaj co 60 000–120 000 km.',
      },
      {
        q: 'Czy po naprawie silnika dostanę gwarancję?',
        a: 'Tak — na wszystkie naprawy udzielamy gwarancji serwisowej. Szczegółowe warunki ustalamy indywidualnie w zależności od zakresu prac.',
      },
    ],
  },
  {
    title: 'Diagnostyka komputerowa',
    description: 'Odczyt i kasowanie błędów, adaptacje podzespołów, analiza parametrów pracy.',
    icon: 'cpu',
    slug: 'diagnostyka-komputerowa',
    longDescription:
      'Nowoczesne samochody to dziesiątki sterowników i czujników komunikujących się ze sobą przez magistrale CAN/LIN. Nasza pracownia diagnostyczna jest wyposażona w profesjonalne urządzenia diagnostyczne obsługujące wszystkie popularne marki pojazdów. Diagnozujemy usterki, które nie są widoczne "gołym okiem" — od awarii silnika, przez problemy z ABS i ESP, po ukryte błędy skrzyni biegów.',
    includes: [
      'Odczyt i kasowanie kodów błędów z wszystkich sterowników',
      'Diagnostyka silnika, ABS, ESP, poduszek powietrznych',
      'Adaptacje i kalibracja podzespołów po wymianie',
      'Analiza parametrów pracy silnika w czasie rzeczywistym',
      'Programowanie sterowników i aktualizacje oprogramowania',
      'Diagnostyka instalacji elektrycznej i CAN-bus',
    ],
    duration: 'Od 30 minut do 2 godzin roboczych',
    faq: [
      {
        q: 'Czy kontrolka "check engine" to poważna usterka?',
        a: 'Nie zawsze. Może to być drobna usterka czujnika lub poważniejszy problem z silnikiem. Najważniejsze jest szybkie zdiagnozowanie kodu błędu — nie warto ignorować tej kontrolki.',
      },
      {
        q: 'Czy kasowanie błędów rozwiązuje problem?',
        a: 'Samo skasowanie błędu usuwa tylko objaw, nie przyczynę. Jeśli usterka nie zostanie naprawiona, błąd powróci. Kasowanie błędów ma sens dopiero po przeprowadzeniu naprawy.',
      },
      {
        q: 'Jakie marki pojazdów obsługujecie diagnostycznie?',
        a: 'Obsługujemy wszystkie popularne marki europejskie, azjatyckie i amerykańskie: Volkswagen, Audi, BMW, Mercedes, Opel, Ford, Toyota, Kia, Hyundai i wiele innych.',
      },
    ],
  },
  {
    title: 'Hamulce i zawieszenie',
    description: 'Wymiana klocków, tarcz i przewodów hamulcowych. Serwis amortyzatorów i geometria.',
    icon: 'disc',
    slug: 'hamulce-zawieszenie',
    longDescription:
      'Sprawny układ hamulcowy i zawieszenie to podstawa bezpiecznej jazdy. Wykonujemy kompleksowe naprawy — od prostej wymiany klocków, przez serwis amortyzatorów, po pełną regulację geometrii kół na nowoczesnym urządzeniu 3D. Każda wymiana elementów układu hamulcowego jest potwierdzona testem drogowym.',
    includes: [
      'Wymiana klocków i tarcz hamulcowych',
      'Wymiana i naprawa zacisków hamulcowych',
      'Wymiana przewodów i płynu hamulcowego',
      'Wymiana amortyzatorów i sprężyn',
      'Wymiana sworzni, tulei i stabilizatorów',
      'Regulacja geometrii kół (zbieżność, camber)',
      'Inspekcja układu kierowniczego',
    ],
    duration: 'Od 1 godziny (klocki) do 4 godzin (pełna oś + geometria)',
    faq: [
      {
        q: 'Jak poznać, że klocki hamulcowe wymagają wymiany?',
        a: 'Sygnałem jest piszczący lub metaliczny dźwięk przy hamowaniu, dłuższa droga hamowania lub wibracje. Zalecamy kontrolę klocków przy każdej wymianie opon.',
      },
      {
        q: 'Czy geometria kół jest potrzebna po każdej wymianie amortyzatorów?',
        a: 'Tak — wymiana amortyzatorów lub elementów zawieszenia może zmienić ustawienie kół. Regulacja geometrii zapobiega nierównomiernemu zużyciu opon i poprawia prowadzenie.',
      },
      {
        q: 'Kiedy wymienić płyn hamulcowy?',
        a: 'Płyn hamulcowy pochłania wilgoć i z czasem obniża temperaturę wrzenia, co zmniejsza skuteczność hamulców. Wymiana co 2 lata lub 40 000 km to standard.',
      },
    ],
  },
  {
    title: 'Klimatyzacja',
    description: 'Napełnianie czynnikiem, sprawdzanie szczelności, odgrzybianie metodą ozonowania.',
    icon: 'snowflake',
    slug: 'klimatyzacja',
    longDescription:
      'Klimatyzacja samochodowa wymaga regularnej obsługi — zarówno przed sezonem letnim, jak i przez cały rok. Wykonujemy serwis układów chłodniczych R134a oraz R1234yf, sprawdzamy szczelność detektorem elektronicznym i ozonujemy kabinę w celu eliminacji bakterii i nieprzyjemnych zapachów. Posiadamy autoryzowane urządzenie do obsługi nowych czynników ekologicznych.',
    includes: [
      'Napełnianie czynnikiem chłodniczym R134a i R1234yf',
      'Sprawdzanie szczelności układu detektorem',
      'Odgrzybianie kabiny metodą ozonowania',
      'Wymiana filtra kabinowego',
      'Sprawdzenie działania sprężarki i skraplacza',
      'Odkażanie parowania i kanałów nawiewu',
    ],
    duration: 'Od 45 minut do 2 godzin',
    faq: [
      {
        q: 'Jak często serwisować klimatyzację?',
        a: 'Zalecamy serwis raz w roku przed sezonem letnim. Regularne napełnianie i odgrzybianie przedłuża żywotność układu i zapobiega kosztownym naprawom sprężarki.',
      },
      {
        q: 'Dlaczego klimatyzacja wydziela nieprzyjemny zapach?',
        a: 'Przyczyną jest rozrost bakterii i pleśni na parowaczu w warunkach wysokiej wilgotności. Ozonowanie skutecznie eliminuje mikroorganizmy i przywraca świeże powietrze w kabinie.',
      },
      {
        q: 'Czy klimatyzacja zużywa więcej paliwa?',
        a: 'Tak, około 0,5–1 l/100 km więcej. Jednak sprawny, prawidłowo napełniony układ pracuje efektywniej niż taki wymagający serwisu — co zmniejsza nadmierne zużycie paliwa.',
      },
    ],
  },
  {
    title: 'Elektryka pojazdowa',
    description: 'Naprawa alternatorów, rozruszników oraz diagnostyka usterek elektrycznych.',
    icon: 'bolt',
    slug: 'elektryka-pojazdowa',
    longDescription:
      'Elektryka pojazdowa to jedna z najbardziej wymagających dziedzin motoryzacji. W naszym warsztacie diagnozujemy i naprawiamy usterki elektryczne wszelkiego rodzaju — od prostych problemów z akumulatorem, przez naprawę alternatorów i rozruszników, po skomplikowane usterki instalacji CAN-bus. Dysponujemy specjalistycznym sprzętem do pomiaru i lokalizacji zwarć.',
    includes: [
      'Diagnostyka i naprawa instalacji elektrycznej',
      'Regeneracja i wymiana alternatorów',
      'Naprawa i wymiana rozruszników',
      'Wymiana i ładowanie akumulatorów',
      'Naprawa oświetlenia (LED, ksenon, halogen)',
      'Montaż i konfiguracja systemów alarmowych i audio',
      'Lokalizacja zwarć i przerw w instalacji',
    ],
    duration: 'Od 30 minut (akumulator) do całego dnia roboczego (złożone usterki elektryczne)',
    faq: [
      {
        q: 'Skąd wiem, że alternator jest uszkodzony?',
        a: 'Objawami są: lampka akumulatora na desce rozdzielczej, rozładowujący się akumulator, ściemniające się światła podczas jazdy lub piszczący pasek klinowy. Warto zbadać to jak najszybciej.',
      },
      {
        q: 'Czy akumulator można naprawić?',
        a: 'W większości przypadków uszkodzony akumulator należy wymienić. Możemy sprawdzić jego stan testerm elektronicznym i ocenić, czy wymiana jest konieczna.',
      },
      {
        q: 'Jakie systemy elektryczne obsługujecie?',
        a: 'Obsługujemy instalacje 12V i 24V w samochodach osobowych i dostawczych, systemy CAN-bus, LIN, MOST, a także montaż akcesoriów elektrycznych.',
      },
    ],
  },
  {
    title: 'Wulkanizacja',
    description: 'Sezonowa wymiana opon, wyważanie kół, naprawa ogumienia i montaż.',
    icon: 'wheel',
    slug: 'wulkanizacja',
    longDescription:
      'Nasz punkt wulkanizacyjny obsługuje zarówno sezonową wymianę opon, jak i naprawy doraźne po przebiciu. Dysponujemy montażownicą i wyważarką do wszystkich popularnych rozmiarów felg — stalowych i aluminiowych. Oferujemy też przechowywanie opon sezonowych w warunkach chroniących przed uszkodzeniami.',
    includes: [
      'Sezonowa wymiana opon (lato / zima)',
      'Wyważanie statyczne i dynamiczne kół',
      'Naprawa opon po przebiciu (wulkanizacja na zimno i na gorąco)',
      'Montaż i demontaż opon z felg stalowych i aluminiowych',
      'Kontrola ciśnienia i stanu opon',
      'Przechowywanie opon sezonowych',
    ],
    duration: 'Od 30 minut (1 koło) do 1,5 godziny (komplet 4 kół z wyważaniem)',
    faq: [
      {
        q: 'Kiedy założyć opony zimowe?',
        a: 'Zalecamy zakładanie opon zimowych gdy temperatura regularnie spada poniżej +7°C — zazwyczaj od połowy października do końca marca. Opony zimowe zachowują elastyczność i zapewniają przyczepność poniżej tej temperatury.',
      },
      {
        q: 'Jak często wyważać koła?',
        a: 'Wyważanie zaleca się przy każdej wymianie opon, po naprawie przebicia oraz gdy odczuwasz wibracje kierownicy przy prędkości 80–120 km/h.',
      },
      {
        q: 'Czy możliwa jest naprawa każdego przebicia?',
        a: 'Nie każdego. Przebicia do 6 mm w centralnej strefie bieżnika nadają się do naprawy. Uszkodzenia boku opony lub zbyt duże przekłucia dyskwalifikują oponę z naprawy ze względów bezpieczeństwa.',
      },
    ],
  },
];
