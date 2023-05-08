import { Crimson_Text, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const crimsonText = Crimson_Text({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-crimson-text',
});

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shop your favorite items here',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${montserrat.variable} ${crimsonText.variable} min-h-full font-sans bg-slate-200 flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
