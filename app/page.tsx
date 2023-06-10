import Link from 'next/link';
import map from '../public/indonesia.svg';
import Image from 'next/image';
import { MapIndo } from '@/components/client/map';
import geoUrl from '@/components/map.json';
import { Suspense } from 'react';

interface UserJson {
  id: number;
  name: string;
}

export default async function Home() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  return (
    <div className="flex flex-col w-full text-white ">
      {/* {data.map((json: UserJson) => (
        <Link href={`/provinsi/${json.id}`} key={json.id}>
          {json.name}
        </Link>
      ))} */}
      <div className="relative flex items-center justify-center border-red-600">
        <Suspense fallback={<div>please wait...</div>}>
          <MapIndo center={[117, -4]} zoom={6} geoUrl={geoUrl} maxZoom={30} />
        </Suspense>
        {/* <Image className="object-contain map" fill src={map} alt="" /> */}
      </div>
    </div>
  );
}
