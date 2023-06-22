import Link from 'next/link';
import { Suspense } from 'react';
import provinsi from '@/components/nusantara-provinsi.json';
import { NavAside } from '../client';
export interface Province {
  province: string;
  code: string;
}
export default async function SideNavLayout({ children }: { children: React.ReactNode }) {
  const { provinsi: provi } = provinsi;
  return (
    <div className="flex">
      <aside className="hidden min-h-screen min-w-max bg-emerald-700 md:block">
        <ul>
          {provi.map((prov: Province) => (
            <li className="px-2" key={prov.code}>
              <NavAside prov={prov} />
            </li>
          ))}
        </ul>
        {/* <Suspense fallback="loading all province...">
          <ProvinceList />
        </Suspense> */}
      </aside>
      {children}
    </div>
  );
}

// async function ProvinceList() {
//   // await new Promise(resolve => setTimeout(resolve, 2000));
//   // const pokeDataResponse = await fetch('https://api.wilayah-nusantara.id/provinsi?limit=37');
//   // const { data: provinsi } = await pokeDataResponse.json();
//   return (
//     <ul>
//       {provinsi.map((prov: Province) => (
//         <li className="px-2" key={prov.code}>
//           <NavAside prov={prov} />
//         </li>
//       ))}
//     </ul>
//   );
// }
