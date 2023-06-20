import Image from 'next/image';
import { UnsplashImage } from '../models/unsplash-image';
import { Suspense } from 'react';
import Loading from '@/components/client/loader';
import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { CButton } from '@/components/client/client-button';

export const metadata = {
  title: 'Static Fetching - Next JS 13.4 Image',
};

export default async function Page() {
  const key = process.env.UNSPLASH_KEY;
  const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}`);
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Loading className="w-screen h-screen" />}>
        <Image
          src={image.urls.regular}
          alt={image.description || image.alt_description}
          width={width}
          height={height}
          className="h-full max-w-full rounded"
        />
        <p className="hover:underline text-blue-50">
          by&nbsp;
          <Link target="_blank" href={`https://unsplash.com/@${image.user.username}`}>
            {image.user.username}
          </Link>
        </p>
      </Suspense>
      <Link href="/dynamic">to SSR</Link>
      <CButton data={image.alt_description}>console this</CButton>
    </div>
  );
}
