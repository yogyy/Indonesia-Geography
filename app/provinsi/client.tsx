'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Province } from './[id]/layout';
import { cn } from '@/lib/utils';

const NavAside = ({ prov }: { prov: Province }) => {
  const pathname = usePathname();
  const current = pathname!.split('/');
  const ccc = current[current.length - 1];
  return (
    <Link
      className={cn('font-semibold', ccc == prov.code.toString() ? 'text-sky-400' : '')}
      href={`/provinsi/${prov.code}`}
    >
      {prov.province}
    </Link>
  );
};

export { NavAside };
