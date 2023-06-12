import { ComboboxDemo } from '@/components/client/combobox';
import { DialogButton } from './client';
import { Suspense } from 'react';
import { useSearch } from '@/hooks/useSearch';

export default async function Province() {
  const provinsiData = await fetch('https://api.wilayah-nusantara.id/provinsi?limit=37');
  const { data: provinsi } = await provinsiData.json();

  return (
    <div className="mx-10 p-11 h-screen">
      <Suspense>
        <ComboboxDemo frameworks={provinsi} />
      </Suspense>
    </div>
  );
}
