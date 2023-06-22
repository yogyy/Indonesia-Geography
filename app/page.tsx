import Link from 'next/link';
import Image from 'next/image';
import { MapIndo } from '@/components/client/map';
import geoUrl from '@/components/map.json';
import { Suspense } from 'react';
import { HoverCardDemo } from '@/components/client/test';
import Loading from '@/components/client/loader';

export default async function Home() {
  const res1 = await fetch(
    'https://raw.githubusercontent.com/yogyy/learn-NextJS-13.4-appdir/main/components/map.json',
    {
      cache: 'force-cache',
    }
  );
  const data = await res1.json();
  return (
    <div className="flex flex-col w-full text-white ">
      <div className="relative flex items-center justify-center border-red-600">
        <Suspense fallback={<Loading className="w-screen h-screen" />}>
          <MapIndo topage={true} center={[117, -4]} zoom={6} geoUrl={data} maxZoom={30} />
        </Suspense>
      </div>
    </div>
  );
}
