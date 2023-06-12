import { ComboboxDemo } from '@/components/client/combobox';
// import { atom, useAtom } from 'jotai';
import Link from 'next/link';
import { Suspense } from 'react';
import { NavLink } from './comp/nav-link';

// export const nameAtom = atom({ provinsi: 'Province', kabupaten: 'Regency', kecamatan: 'District' });

interface Provinsi {
  code: string;
  province: string;
}

export default async function Navbar() {
  return (
    <header className="">
      <nav className="">
        <ul className="flex items-center h-full bg-emerald-700 py-2">
          <NavLink />
          <li className="relative"></li>
        </ul>
      </nav>
    </header>
  );
}
