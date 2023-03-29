import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';
interface Props {
  nav: boolean;
}

export const MobileMenu = ({ nav }: Props) => {
  const { data: session } = useSession();

  return (
    <section
      className={`fixed left-0 mr-5 flex h-screen w-full items-center justify-center bg-zinc-900 duration-300 ease-in md:hidden ${
        nav ? 'top-0' : 'top-[-100%]'
      }`}
    >
      <ul className='text-center'>
        <li className='mb-6 text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
          <Link href='/'>Home</Link>
        </li>
        <li className='mb-6 text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
          <Link href='/live'>Live Channels</Link>
        </li>
        <li className='mb-6 text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
          <Link href='/categories'>Top Categories</Link>
        </li>

        <li className='mb-3 border-b-2 border-gray-400 pb-2 text-xl font-bold'>
          <p className='text-gray-400'>User Profile</p>
        </li>

        {session ? (
          <div>
            <li className='text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
              <Link href='/account'>Go to account</Link>
            </li>
            <li className='text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
              <button
                className='mt-6 flex h-12 w-full items-center justify-center rounded-md bg-gray-600'
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </li>
          </div>
        ) : (
          <li className='text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
            <button
              className='flex h-12 w-full items-center justify-center rounded-md bg-gray-600'
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
    </section>
  );
};
