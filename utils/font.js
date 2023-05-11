import { Crimson_Text, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const crimsonText = Crimson_Text({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-crimson-text',
});
