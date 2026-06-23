export interface Service {
  title: string;
  description: string;
  icon: string; // inline SVG path data
}

export const services: Service[] = [
  {
    title: 'Mechanika ogólna',
    description: 'Naprawy silnika, wymiana rozrządów, sprzęgieł i elementów układu napędowego.',
    icon: 'wrench',
  },
  {
    title: 'Diagnostyka komputerowa',
    description: 'Odczyt i kasowanie błędów, adaptacje podzespołów, analiza parametrów pracy.',
    icon: 'cpu',
  },
  {
    title: 'Hamulce i zawieszenie',
    description: 'Wymiana klocków, tarcz i przewodów hamulcowych. Serwis amortyzatorów i geometria.',
    icon: 'disc',
  },
  {
    title: 'Klimatyzacja',
    description: 'Napełnianie czynnikiem, sprawdzanie szczelności, odgrzybianie metodą ozonowania.',
    icon: 'snowflake',
  },
  {
    title: 'Elektryka pojazdowa',
    description: 'Naprawa alternatorów, rozruszników oraz diagnostyka usterek elektrycznych.',
    icon: 'bolt',
  },
  {
    title: 'Wulkanizacja',
    description: 'Sezonowa wymiana opon, wyważanie kół, naprawa ogumienia i montaż.',
    icon: 'wheel',
  },
];
