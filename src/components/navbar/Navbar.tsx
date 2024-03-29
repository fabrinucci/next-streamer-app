import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown, MobileMenu } from './';
import { TbUser } from 'react-icons/tb';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { AccountMenu } from './AccountMenu';

const logo = 'logo.svg';

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const { data: session } = useSession();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='fixed z-[5] flex h-16 w-full items-center justify-between border-b border-black bg-zinc-900 py-3 text-gray-100'>
      <section className='ml-3 flex items-center gap-6 font-medium'>
        <Link href='/'>
          <Image src={logo} alt='Stream Bos HomePage' width={40} height={40} />
        </Link>
        <Link
          href='/browse'
          className='text-xl duration-300 ease-in hover:text-emerald-400'
        >
          Browse
        </Link>
        <Dropdown />
      </section>

      <section className='hidden items-center justify-center md:flex'>
        <input
          className='w-96 rounded-lg bg-zinc-600 py-2 px-4 font-medium text-zinc-300 placeholder:text-zinc-300 focus:bg-black focus:outline-none focus-visible:outline-green-500'
          type='text'
          placeholder='Search'
        />
      </section>

      <section className='mr-5 hidden items-center md:flex'>
        {session ? (
          <div className='flex items-center gap-3'>
            <div>
              <p className='hidden lg:block'>
                Welcome, <span className='font-semibold'>{session.user?.name}</span>
              </p>
            </div>
            <AccountMenu />
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <Link href='/account'>
              <button className='rounded-md bg-green-700 py-1 px-4 font-semibold'>
                Sign in
              </button>
            </Link>
            <TbUser size={22} />
          </div>
        )}
      </section>

      <section onClick={handleNav} className='z-20 mr-5 cursor-pointer md:hidden'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </section>

      <MobileMenu nav={nav} setNav={setNav} />
    </nav>
  );
};
