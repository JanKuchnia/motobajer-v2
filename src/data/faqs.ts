export interface Faq {
  q: string;
  a: string;
  category: string;
}

export const faqs: Faq[] = [
  // Godziny i lokalizacja
  {
    category: 'Godziny i lokalizacja',
    q: 'Jakie są godziny otwarcia warsztatu?',
    a: 'Warsztat i sklep z częściami są otwarte od poniedziałku do piątku w godzinach 8:00–17:00 oraz w soboty 8:00–13:00. W niedzielę jesteśmy nieczynni.',
  },
  {
    category: 'Godziny i lokalizacja',
    q: 'Gdzie dokładnie jesteście?',
    a: 'Działamy w dwóch punktach w Myślenicach. Centrum serwisowe mieści się przy ul. Drogowców 6, a sklep z częściami przy ul. Piłsudskiego 16. Obie lokalizacje znajdziesz na mapach w zakładce Kontakt.',
  },
  {
    category: 'Godziny i lokalizacja',
    q: 'Czy jest parking przy warsztacie?',
    a: 'Tak, przy obu lokalizacjach jest bezpłatny parking dla klientów. Nie musisz martwić się o miejsce przy zostawieniu auta na naprawę.',
  },
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
  {
    category: 'Rezerwacja i wizyty',
    q: 'Czy mogę poczekać na samochód na miejscu?',
    a: 'Oczywiście. Przy drobnych pracach, takich jak wymiana oleju czy diagnostyka, możesz poczekać w poczekalni. Przy dłuższych naprawach zalecamy pozostawienie auta i odbiór po zakończeniu prac.',
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
  {
    category: 'Kosztorys i płatność',
    q: 'Czy wystawiacie faktury na firmę?',
    a: 'Tak, wystawiamy faktury VAT zarówno dla osób prywatnych, jak i firm. Podaj NIP przy składaniu zlecenia, a fakturę wystawimy zgodnie z danymi firmy.',
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
  {
    category: 'Części i jakość',
    q: 'Czy sprzedajecie oleje silnikowe i płyny samochodowe?',
    a: 'Tak, w sklepie z częściami mamy szeroki wybór olejów silnikowych, płynów do układu hamulcowego, płynów chłodniczych i innych materiałów eksploatacyjnych. Pomożemy dobrać odpowiedni produkt do Twojego auta.',
  },
  // O warsztacie
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
    q: 'Jakie marki samochodów naprawiacie?',
    a: 'Naprawiamy wszystkie popularne marki aut osobowych i dostawczych: Volkswagen, Audi, BMW, Mercedes, Toyota, Opel, Ford, Renault, Peugeot, Fiat i wiele innych. Dysponujemy diagnostyką obsługującą systemy OBD wszystkich producentów.',
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
  {
    category: 'Sklep z częściami',
    q: 'Jak sprawdzić, czy dana część jest dostępna od ręki?',
    a: 'Zadzwoń lub napisz do nas przed przyjazdem — podaj markę, model, rok produkcji auta i numer VIN, a sprawdzimy dostępność na miejscu lub w hurtowni i podamy termin realizacji.',
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
  {
    category: 'Konkretne usługi',
    q: 'Czy zajmujecie się klimatyzacją samochodową?',
    a: 'Tak. Wykonujemy serwis, napełnianie czynnikiem, czyszczenie i dezynfekcję układów klimatyzacji. Najlepszy termin to wiosna, zanim zacznie się sezon letni — wtedy terminy są krótsze.',
  },
  {
    category: 'Konkretne usługi',
    q: 'Czy przechowujecie opony między sezonami?',
    a: 'Tak, oferujemy przechowanie opon między sezonami. Opony są składowane w odpowiednich warunkach, oznakowane i gotowe do montażu przy kolejnej wymianie. Zapytaj o szczegóły przy rezerwacji wymiany.',
  },
  {
    category: 'Konkretne usługi',
    q: 'Co zrobić w razie awarii auta po godzinach pracy?',
    a: 'W przypadku awarii poza godzinami otwarcia zadzwoń na numer 609 845 865 — postaramy się doradzić telefonicznie. W poważniejszych sytuacjach polecamy wezwanie holownika i zostawienie auta przed warsztatem z informacją o usterce.',
  },
];
