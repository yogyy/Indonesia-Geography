import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { MyContextProvider } from '@/components/client/context';

const inter = Inter({ subsets: ['latin'], fallback: ['arial'] });

export const metadata = {
  title: 'Indonesia coyy',
  description: 'Learning Next 13.4, uhh, Indonesian Geographies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        <MyContextProvider>
          <main>{children}</main>
        </MyContextProvider>
      </body>
    </html>
  );
}
