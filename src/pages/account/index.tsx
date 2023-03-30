import type { ReactElement } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { Layout } from 'components/layouts';

export default function Account() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className='mx-auto flex w-full max-w-[400px] flex-col pt-[100px]'>
          <h2 className='mb-4 text-3xl font-semibold'>Welcome, {session.user?.name}</h2>
          <p className='mb-4'>
            Signed in as <span className='font-semibold'>{session.user?.email}</span>
          </p>
          <div className='mx-auto mb-4'>
            <Image
              className='rounded-full'
              src={session.user?.image!}
              alt={session.user?.name!}
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
      ) : (
        <div className='mx-auto flex w-full max-w-[400px] flex-col pt-[100px]'>
          <h2 className='mb-4 text-3xl font-semibold'>Login</h2>
          <p className='mb-4'>Choose the account you want to sign in with</p>

          <button
            className='mb-4 flex h-12 w-auto items-center justify-center rounded-sm bg-gray-600 duration-200 ease-in hover:bg-gray-800'
            onClick={() => signIn()}
          >
            <FaGithub className='mr-2' />
            Login with<span className='ml-1 font-semibold'>GitHub</span>
          </button>
          <button
            className='flex h-12 w-auto items-center justify-center rounded-sm bg-blue-600 duration-300 ease-in hover:bg-blue-800'
            onClick={() => signIn()}
          >
            <FaGoogle className='mr-2' />
            Login with<span className='ml-1 font-semibold'>Google</span>
          </button>
        </div>
      )}
    </>
  );
}

Account.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Account - BosStream'>{page}</Layout>;
};
