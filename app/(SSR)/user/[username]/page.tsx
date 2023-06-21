import { UnsplashUsers } from '@/app/models/unsplash-users';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUsers> {
  const res = await fetch(
    `http://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_KEY}`
  );

  if (res.status === 404) notFound();

  return await res.json();
}

export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title: `${user.first_name} ${user?.last_name} ` || `${user.username} NextJS 13.4 Image Gallery`,
  };
}
export default async function Page({ params: { username } }: PageProps) {
  const user = await getUser(username);

  return (
    <div className="">
      <h1>{user.username}</h1>
      <p>First Name : {user.first_name}</p>
      <p>Last Name : {user.last_name}</p>
      <Link
        className="text-blue-500"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.username}
      </Link>
    </div>
  );
}
