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
      <aside className="hidden min-h-screen border-r min-w-max md:block">
        <ul>
          {provi.map((prov: Province) => (
            <li className="px-2" key={prov.code}>
              <NavAside prov={prov} />
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </div>
  );
}
