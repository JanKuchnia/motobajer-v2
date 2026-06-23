export interface Review {
  author: string;
  text: string;
  date: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    author: 'Mateusz Lenart',
    text: 'Gorąco polecam serwis Motobajer! Jestem bardzo zadowolony z usług, które otrzymałem. Obsługa była niezwykle profesjonalna i uprzejma.',
    date: 'rok temu',
    rating: 5,
  },
  {
    author: 'Józek Żak',
    text: 'Bardzo miła obsługa i chętnie pomagają i udzielają informacji fachowcy, którzy znają się na rzeczy. Ceny mają przystępne — polecam ten sklep.',
    date: 'rok temu',
    rating: 5,
  },
  {
    author: 'MrWyntel',
    text: 'Polecam. Duży wybór, konkurencyjne ceny, fachowa obsługa i wspaniały warsztat samochodowy.',
    date: 'rok temu',
    rating: 5,
  },
  {
    author: 'Kawa Inka',
    text: 'Profesjonalna obsługa, szeroki asortyment. Polecam.',
    date: '2 lata temu',
    rating: 5,
  },
  {
    author: 'MPL',
    text: 'Polecam fachowe doradztwo.',
    date: 'rok temu',
    rating: 5,
  },
  {
    author: 'Małgorzata Dzidko',
    text: 'Najlepsi.',
    date: '7 miesięcy temu',
    rating: 5,
  },
];
