import { montserrat, crimsonText } from '@/utils/font';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartProvider from '../components/CartProvider';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shop your favorite items here',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${montserrat.variable} ${crimsonText.variable} min-h-full font-sans bg-slate-200 flex flex-col text-slate-950`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
