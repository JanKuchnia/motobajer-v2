export interface Faq {
  q: string;
  a: string;
  category: string;
}

export const faqs: Faq[] = [
  // Rezerwacja i wizyty
  {
    category: 'Rezerwacja i wizyty',
    q: 'Czy mogę przyjechać bez wcześniejszej rezerwacji?',
    a: 'Przyjmujemy klientów zarówno z rezerwacją, jak i bez niej — jednak wizyta umówiona z wyprzedzeniem gwarantuje, że mechanik będzie od razu do dyspozycji. W sezonie (wymiana opon, serwis klimatyzacji) terminy są zajęte kilka dni wcześniej, dlatego warto zadzwonić.',
  },
  {
    category: 'Rezerwacja i wizyty',
    q: 'Jak długo czeka się na naprawę?',
    a: 'Drobne prace (wymiana oleju, klocki, diagnostyka) realizujemy zazwyczaj tego samego dnia. Poważniejsze naprawy wymagają od 1 do kilku dni — skontaktujemy się z Tobą po wstępnej diagnostyce i podamy szacunkowy czas.',
  },
  {
    category: 'Rezerwacja i wizyty',
    q: 'Czy mogę zostawić samochód i odebrać go później?',
    a: 'Tak, to nasza standardowa usługa. Samochód możesz zostawić rano i odebrać po zakończeniu pracy. Poinformujemy Cię telefonicznie, gdy auto będzie gotowe.',
  },
  // Kosztorys i płatność
  {
    category: 'Kosztorys i płatność',
    q: 'Czy wycena jest bezpłatna?',
    a: 'Wstępna wycena na podstawie opisu usterki jest bezpłatna. Diagnostyka komputerowa oraz szczegółowa inspekcja mechaniczna mogą być odpłatne — koszt jest jednak zazwyczaj odliczany od końcowej faktury za naprawę.',
  },
  {
    category: 'Kosztorys i płatność',
    q: 'Czy mogę zapłacić kartą?',
    a: 'Tak, akceptujemy płatności kartą debetową i kredytową oraz gotówkę. Wystawiamy faktury VAT.',
  },
  {
    category: 'Kosztorys i płatność',
    q: 'Czy naprawa jest wyceniana z góry?',
    a: 'Zawsze staramy się podać szacunkowy koszt przed przystąpieniem do pracy. Jeśli w trakcie naprawy okaże się, że zakres prac jest większy, skontaktujemy się przed podjęciem dodatkowych działań.',
  },
  // Części i jakość
  {
    category: 'Części i jakość',
    q: 'Jakich części używacie do napraw?',
    a: 'Używamy części oryginalnych oraz wysokiej jakości zamienników marek: Bosch, Valeo, SKF, NGK, Mann+Hummel, Brembo i innych. Wszystkie dostępne są w naszym sklepie z częściami. Możesz też przynieść własne części — naprawimy Twój samochód.',
  },
  {
    category: 'Części i jakość',
    q: 'Czy udzielacie gwarancji na naprawy?',
    a: 'Tak, udzielamy gwarancji serwisowej na wszystkie wykonane prace. Szczegółowe warunki zależą od zakresu naprawy i zastosowanych części — zapytaj mechanika przy odbiorze.',
  },
  // EuroWarsztat
  {
    category: 'O warsztacie',
    q: 'Co oznacza certyfikat EuroWarsztat?',
    a: 'EuroWarsztat to ogólnopolska sieć warsztatów zrzeszonych w sieci Groupauto. Przynależność do sieci gwarantuje dostęp do profesjonalnych szkoleń technicznych, aktualnych katalogów części, wsparcia technicznego i systemów diagnostycznych. Dla klientów oznacza to wyższy standard obsługi i pewność jakości.',
  },
  {
    category: 'O warsztacie',
    q: 'Ile lat działa warsztat Motobajer?',
    a: 'Warsztat MOTOBAJER prowadzony jest przez rodzinę Bajer od ponad 18 lat. Przez ten czas zdobyliśmy zaufanie tysięcy klientów z Myślenic i okolic, zachowując rodzinne podejście do każdego zlecenia.',
  },
  {
    category: 'O warsztacie',
    q: 'Ile macie lokalizacji?',
    a: 'Działamy w dwóch punktach w Myślenicach — centrum serwisowe oraz sklep z częściami. Obie lokalizacje znajdziesz w zakładce Lokalizacje na naszej stronie.',
  },
  // Sklep z częściami
  {
    category: 'Sklep z częściami',
    q: 'Czy możecie zamówić część, której nie ma w sklepie?',
    a: 'Tak. Współpracujemy z hurtowniami motoryzacyjnymi i jesteśmy w stanie zamówić praktycznie każdą część do popularnych marek pojazdów — zazwyczaj w ciągu 24–48 godzin.',
  },
  {
    category: 'Sklep z częściami',
    q: 'Czy sprzedajecie części bez montażu?',
    a: 'Oczywiście. Nasz sklep z częściami obsługuje zarówno klientów, którzy chcą samodzielnie naprawić samochód, jak i inne warsztaty. Doradzamy w doborze właściwych części.',
  },
  // Konkretne usługi
  {
    category: 'Konkretne usługi',
    q: 'Czy wykonujecie badania techniczne (przeglądy)?',
    a: 'Nie wykonujemy badań technicznych — te są zarezerwowane dla stacji kontroli pojazdów. Natomiast możemy przeprowadzić przegląd serwisowy i naprawić ewentualne usterki, które uniemożliwiają pozytywne przejście badania technicznego.',
  },
  {
    category: 'Konkretne usługi',
    q: 'Czy przyjmujecie samochody elektryczne i hybrydowe?',
    a: 'Wykonujemy diagnostykę komputerową i naprawy mechaniczne pojazdów hybrydowych. Naprawy wysokonapięciowych układów HV wykonujemy po wcześniejszym uzgodnieniu — skontaktuj się z nami, aby omówić zakres prac.',
  },
];
