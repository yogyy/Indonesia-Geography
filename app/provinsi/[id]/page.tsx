import { Metadata } from 'next';
import { Pokedex } from '../client';
import { MapIndo } from '@/components/client/map';
import { Suspense } from 'react';
import topojson from '@/components/nusantara-provinsi.json';

type Params = {
  params: {
    id: string;
  };
};

interface Province {
  topojson: any;
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
    title: `Province ${data.province}`,
    description: `This is the page of province ${data.province}`,
  };
}

export default async function Testing({ params: { id } }: Params) {
  const json = topojson;
  console.log(json);

  const ProvinceData: Promise<Province> = getProvince(id);
  const data = await ProvinceData;
  return (
    <div className="flex flex-col w-full">
      <Pokedex province={data} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Suspense fallback={<div>please wait...</div>}>
        {/* <MapIndo geoUrl={json.provinsi.} /> */}
      </Suspense>
    </div>
  );
}
