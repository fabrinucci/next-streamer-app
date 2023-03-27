import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from './';
import { TbUser, TbSearch } from 'react-icons/tb';

const logo = 'logo.svg';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-zinc-900 py-3 text-gray-100'>
      <section className='ml-3 flex items-center gap-6 font-medium'>
        <Link href='/'>
          <Image src={logo} alt='Stream Bos HomePage' width={40} height={40} />
        </Link>
        <Link href='/browse' className='text-xl  transition-colors hover:text-emerald-400'>
          Browse
        </Link>
        <Dropdown />
      </section>

      <section className='flex items-center justify-center'>
        <input
          className='w-96 rounded-lg bg-zinc-600 py-2 px-4 font-medium text-zinc-300 placeholder:text-zinc-300 focus:bg-black focus:outline-none focus-visible:outline-green-500'
          type='text'
          placeholder='Search'
        />
      </section>

      <section className='mr-5 flex items-center gap-2'>
        <button className='rounded-md bg-green-600 py-1 px-4 font-semibold'>Account</button>
        <TbUser size={22} />
      </section>
    </nav>
  );
};
