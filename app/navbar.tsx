'use client';

import { atom, useAtom } from 'jotai';
import Link from 'next/link';

export const nameAtom = atom({ provinsi: 'Province', kabupaten: 'Regency', kecamatan: 'District' });

export default function Navbar() {
  const [name] = useAtom(nameAtom);
  const navbar = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: name.provinsi,
      link: '/provinsi',
    },
    {
      name: name.kabupaten,
      link: '/kabupaten',
    },
    {
      name: name.kecamatan,
      link: '/kecamatan',
    },
  ];

  return (
    <header className="sticky">
      <nav>
        <ul className="flex items-center w-full h-11 bg-sky-600">
          {navbar.map(nav => (
            <li key={nav.link}>
              <Link className="px-3 py-1.5 mx-2 rounded-sm w-fit bg-primary" href={nav.link}>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
