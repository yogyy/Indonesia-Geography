'use client';

import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { nameAtom } from '@/app/navbar';
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

const Pokedex = ({ province }: any) => {
  const [name, setName] = useAtom(nameAtom);
  console.log(name.provinsi);

  return (
    <div className="">
      <Button
        className="mx-2 my-4"
        onClick={() =>
          setName(prevName => ({
            ...prevName,
            provinsi: province.province,
          }))
        }
      >
        {province?.province}
      </Button>
      <p>current location: {province.province}</p>
    </div>
  );
};

const DialogButton = () => {
  const [name] = useAtom(nameAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-2 py-1.5 bg-sky-500 rounded-sm">Open</AlertDialogTrigger>
      <AlertDialogContent className="bg-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>{name.provinsi}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { Pokedex, DialogButton };
