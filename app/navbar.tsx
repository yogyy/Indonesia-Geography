import { ComboboxDemo } from '@/components/client/combobox';
// import { atom, useAtom } from 'jotai';
import Link from 'next/link';
import { Suspense } from 'react';
import { NavLink } from './comp/nav-link';
import { SheetDemo } from './comp/hamburger';

// export const nameAtom = atom({ provinsi: 'Province', kabupaten: 'Regency', kecamatan: 'District' });

interface Provinsi {
  code: string;
  province: string;
}

export default async function Navbar() {
  return (
    <header className="">
      <nav className="flex items-center justify-center sm:px-10">
        <div className="block sm:hidden">
          <SheetDemo />
        </div>
        <p className="text-base font-semibold text-green-600">Nusantara</p>
        <ul className="flex items-center justify-center w-full h-full py-2 supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
          <div className="hidden sm:flex">
            <NavLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
