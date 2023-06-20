import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '@/components/client/loader';
import { UnsplashImage } from '@/app/models/unsplash-image';

import Link from 'next/link';

export const metadata = {
  title: 'Dynamic Fetching - Next JS 13.4 Image',
};

export const revalidate = 0;

export default async function Page() {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}`,
    {
      // cache: 'no-cache',
      // next: {revalidate: 0}
    }
  );
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<Loading className="w-screen h-screen" />}>
        <Image
          src={image.urls.regular}
          alt={image.description}
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
    </div>
  );
}
