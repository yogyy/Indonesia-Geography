import Link from 'next/link';
import Image from 'next/image';
import { MapIndo } from '@/components/client/map';
import geoUrl from '@/components/map.json';
import { Suspense } from 'react';
import { Test } from '@/components/client/test';

export default async function Home() {
  const res1 = await fetch(
    'https://raw.githubusercontent.com/yogyy/learn-NextJS-13.4-appdir/main/components/map.json'
  );
  const res2 = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res1.json();
  const data2 = await res2.json();
  return (
    <div className="flex flex-col w-full text-white ">
      <div className="relative flex items-center justify-center border-red-600">
        <Suspense fallback={<div>load map...</div>}>
          <MapIndo topage={true} center={[117, -4]} zoom={6} geoUrl={data} maxZoom={30} />
        </Suspense>
      </div>
      {/* <Test data={data2.name} /> */}
    </div>
  );
}
