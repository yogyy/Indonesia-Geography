import Link from 'next/link';
import Image from 'next/image';
import { MapIndo } from '@/components/client/map';
import geoUrl from '@/components/map.json';
import { Suspense } from 'react';

interface UserJson {
  id: number;
  name: string;
}

export default async function Home() {
  const res = await fetch(
    'https://raw.githubusercontent.com/yogyy/learn-NextJS-13.4-appdir/main/components/map.json'
  );
  const data = await res.json();

  return (
    <div className="flex flex-col w-full text-white ">
      <div className="relative flex items-center justify-center border-red-600">
        <Suspense fallback={<div>please wait...</div>}>
          <MapIndo topage={true} center={[117, -4]} zoom={6} geoUrl={data} maxZoom={30} />
        </Suspense>
      </div>
    </div>
  );
}
