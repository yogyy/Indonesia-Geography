import { DialogButton } from './client';

interface UserJson {
  id: number;
  name: string;
}

export default async function Province() {
  return (
    <div className="mx-10 p-11">
      <DialogButton />
    </div>
  );
}
