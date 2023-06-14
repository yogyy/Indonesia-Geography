import Link from 'next/link';
import axios from 'axios';
import { SearchKec } from '@/components/client/searchname';

export default async function Kecamatan() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <SearchKec />
    </div>
  );
}
