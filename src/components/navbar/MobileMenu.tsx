import Link from 'next/link';
interface Props {
  nav: boolean;
}

export const MobileMenu = ({ nav }: Props) => {
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
        <li className='mb-6 text-xl font-bold duration-200 ease-in hover:text-emerald-400'>
          <Link href='/account'>Account</Link>
        </li>
      </ul>
    </section>
  );
};
