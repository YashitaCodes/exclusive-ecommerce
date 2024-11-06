import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import NoticeBanner from '@/components/NoticeBanner';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/context/CartContext';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Exclusive | E-Commerce Store',
  description: 'Your one-stop shop for all your needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
    <html lang="en">
      <body className={`${poppins.variable} font-poppins overflow-x-hidden`}>
        <NoticeBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  </CartProvider>
  );
}