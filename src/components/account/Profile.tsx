import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

export const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className='mx-auto flex w-full max-w-[400px] flex-col pt-[100px]'>
      <h2 className='mb-4 text-3xl font-semibold'>Welcome, {session?.user?.name}</h2>
      <p className='mb-4'>
        Signed in as <span className='font-semibold'>{session?.user?.email}</span>
      </p>
      <div className='mx-auto mb-4'>
        <Image
          className='rounded-full'
          src={session?.user?.image!}
          alt={session?.user?.name!}
          width={100}
          height={100}
        />
      </div>
      <button
        className='flex h-12 w-auto items-center justify-center rounded-sm bg-gray-600 font-semibold duration-200 ease-in hover:bg-gray-800'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};
