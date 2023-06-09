import Link from 'next/link';
import { SearchKab } from './client';
import axios from 'axios';

interface UserJson {
  id: number;
  name: string;
}

export default async function Home() {
  // const res = await axios.get('https://api.wilayah-nusantara.id/kabupaten?name=tang');
  // const { data: kabupaten } = await res.data;
  // console.log(kabupaten);
  return (
    <div className="flex flex-col gap-2 p-2 mx-2">
      <SearchKab />
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
