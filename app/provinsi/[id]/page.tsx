import { Metadata } from 'next';
import { MapIndo } from '@/components/client/map';
import { Suspense } from 'react';
import { provinsi } from '@/components/nusantara';

type Params = {
  params: {
    id: string;
  };
};

interface Province {
  topojson?: any;
  code: number;
  province: string;
}

async function getProvince(id: string) {
  const res = await fetch(`https://api.wilayah-nusantara.id/provinsi/${id}`);
  if (!res.ok) throw new Error('failed to fetch Province');

  return res.json();
}

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  const ProvinceData: Promise<Province> = getProvince(id);
  const data = await ProvinceData;

  return {
    title: `${data.province} Province`,
    description: `This is the page of province ${data.province}`,
  };
}

export default async function Testing({ params: { id } }: Params) {
  const geoUrl = provinsi.find(item => item.code === id);
  return (
    <div className="flex flex-col w-full">
      <Suspense fallback={<div>please wait...</div>}>
        <MapIndo
          topage={false}
          center={geoUrl?.center || [0, 0]}
          zoom={25}
          geoUrl={geoUrl?.topojson}
          maxZoom={60}
          scale={geoUrl?.scale}
        />
      </Suspense>
    </div>
  );
}
