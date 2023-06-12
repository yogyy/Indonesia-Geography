import Link from 'next/link';
import { SearchKec } from './client';
import axios from 'axios';

export default async function Kecamatan() {
  // const res = await axios.get('https://api.wilayah-nusantara.id/kabupaten?name=tang');
  // const { data: kabupaten } = await res.data;
  // console.log(kabupaten);
  return (
    <div className="flex flex-col gap-2 p-2 min-h-screen bg-[#131313]">
      <SearchKec />
      {/* <pre>{JSON.stringify(kabupaten, null, 2)}</pre> */}

      {/* {kabupaten.map(kab => (
        <Link
          className="px-3 py-1.5 rounded-sm w-fit bg-primary"
          href={`/provinsi/${kab.code}`}
          key={kab.code}
        >
          {kab.regency}
        </Link>
      ))} */}
    </div>
  );
}
