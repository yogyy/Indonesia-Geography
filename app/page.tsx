import { MapIndo } from '@/components/client/map';

export default async function Home() {
  const res1 = await fetch(
    'https://raw.githubusercontent.com/yogyy/learn-NextJS-13.4-appdir/main/components/map.json',
    {
      cache: 'force-cache',
    }
  );
  const data = await res1.json();
  return (
    <div className="flex flex-col w-full text-white h-fit">
      <div className="relative flex items-center justify-center border-red-600 min-h-cutnav">
        <MapIndo topage={true} center={[117, -4]} zoom={6} geoUrl={data} maxZoom={30} />
      </div>
    </div>
  );
}
