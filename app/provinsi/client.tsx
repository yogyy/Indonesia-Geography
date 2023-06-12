'use client';

import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
// import { nameAtom } from '@/app/navbar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Province } from './[id]/layout';
import { cn } from '@/lib/utils';

const Pokedex = ({ province }: any) => {
  // const [name, setName] = useAtom(nameAtom);
  // console.log(name.provinsi);

  return (
    <div className="">
      <Button
        className="mx-2 my-4"
        // onClick={() =>
        //   setName(prevName => ({
        //     ...prevName,
        //     provinsi: province.province,
        //   }))
        // }
      >
        {province?.province}
      </Button>
      <p>current location: {province.province}</p>
    </div>
  );
};

const DialogButton = () => {
  // const [name] = useAtom(nameAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-2 py-1.5 bg-sky-500 rounded-sm">Open</AlertDialogTrigger>
      <AlertDialogContent className="bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>test</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const NavAside = ({ prov }: { prov: Province }) => {
  const pathname = usePathname();
  const current = pathname!.split('/');
  const ccc = current[current.length - 1];
  return (
    <Link
      className={cn('font-semibold', ccc == prov.code.toString() ? 'text-sky-400' : '')}
      href={`/provinsi/${prov.code}`}
    >
      {prov.province}
    </Link>
  );
};

export { Pokedex, DialogButton, NavAside };
