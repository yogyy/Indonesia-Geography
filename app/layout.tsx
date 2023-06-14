import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { MyContextProvider } from '@/components/client/context';

const inter = Inter({ subsets: ['latin'], fallback: ['arial'] });

export const metadata = {
  title: 'Next 13.4',
  description: 'Learning Next 13.4, uhh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        <MyContextProvider>
          <main className="bg-blue-700/40">{children}</main>
        </MyContextProvider>
      </body>
    </html>
  );
}
