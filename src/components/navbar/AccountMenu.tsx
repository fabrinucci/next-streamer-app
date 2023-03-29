import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export function AccountMenu() {
  const { data: session } = useSession();
  return (
    <Menu as='div' className='relative' title='More'>
      <Menu.Button className='flex'>
        <Image
          className='rounded-full'
          src={session?.user?.image!}
          alt={session?.user?.name!}
          width={35}
          height={35}
        />
      </Menu.Button>

      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute top-3 -left-28 flex flex-col items-center gap-2 rounded-md bg-zinc-800 px-2 py-2 lg:-left-44 lg:top-0'>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`w-32 p-1 text-center font-semibold lg:w-40 ${
                  active && 'rounded-md bg-zinc-700'
                }`}
                href='/account'
              >
                Account
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`w-32 p-1 font-semibold lg:w-40 ${
                  active && 'rounded-md bg-zinc-700'
                }`}
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
