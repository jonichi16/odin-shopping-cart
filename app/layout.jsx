import './globals.css';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shop your favorite items here',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full'>
      <body className='min-h-full'>{children}</body>
    </html>
  );
}
