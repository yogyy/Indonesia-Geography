import Link from 'next/link';
import { Suspense } from 'react';
import provinsi from '@/components/nusantara-provinsi.json';

export default async function SideNavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="min-h-screen border-r min-w-max">
        <Suspense fallback="loading all pokemon...">
          {/* @ts-expect-error- Server Component */}
          <ProvinceList />
        </Suspense>
      </aside>
      {children}
    </div>
  );
}

async function ProvinceList() {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const pokeDataResponse = await fetch('https://api.wilayah-nusantara.id/provinsi?limit=37');
  const { data: provinsi } = await pokeDataResponse.json();
  console.log(provinsi);
  return (
    <ul>
      {provinsi.map((prov: any) => (
        <li className="px-2" key={prov.code}>
          <Link href={`/provinsi/${prov.code}`}>{prov.province}</Link>
        </li>
      ))}
      <span>{provinsi.length} total </span>
    </ul>
  );
}
