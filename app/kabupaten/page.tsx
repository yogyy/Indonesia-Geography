import Link from 'next/link';
import axios from 'axios';
import { SearchKab } from '@/components/client/searchname';

export default async function Kabupaten() {
  return (
    <div className="min-h-screen bg-[#131313]">
      <SearchKab />
    </div>
  );
}
