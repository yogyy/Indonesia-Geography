'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const navbar = [
  {
    name: 'Home',
    link: '/',
  },
  {
    // name: name.provinsi,
    name: 'Provinsi',
    link: '/provinsi',
  },
  {
    // name: name.kabupaten,
    name: 'kabupaten',
    link: '/kabupaten',
  },
  {
    // name: name.kecamatan,
    name: 'Kecamatan',
    link: '/kecamatan',
  },
];
export const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      {navbar.map(nav => (
        <li key={nav.link}>
          <Link
            className={cn(
              'px-1.5 py-0.5 text-sm md:text-base md:px-3 md:py-1.5 mx-2 rounded-sm w-fit bg-green-600 hover:bg-green-600/50 font-semibold',
              pathname === nav.link ? 'bg-sky-600' : ''
            )}
            href={nav.link}
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </>
  );
};
