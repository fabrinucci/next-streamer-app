import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

export const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className='mx-auto flex w-[80%] max-w-[400px] flex-col pt-[100px]  sm:w-full'>
      <h2 className='mb-4 text-2xl font-semibold sm:text-3xl'>
        Welcome, {session?.user?.name}
      </h2>
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
        className='h-12 w-full rounded-sm bg-gray-600 font-semibold duration-200 ease-in hover:bg-gray-800 sm:flex sm:w-auto sm:items-center sm:justify-center'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};
