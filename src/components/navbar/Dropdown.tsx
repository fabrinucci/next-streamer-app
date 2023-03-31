import { Menu, Transition } from '@headlessui/react';
import { TbDotsVertical } from 'react-icons/tb';

const links = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/developers', label: 'Developers' },
];

export function Dropdown() {
  return (
    <Menu as='div' className='relative z-10' title='More'>
      <Menu.Button className='flex'>
        <TbDotsVertical size={22} />
      </Menu.Button>

      <Transition
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute top-3 -left-20 flex flex-col gap-2 rounded-md border-gray-500 bg-zinc-800 px-2 py-2 sm:top-5 sm:left-2 lg:border'>
          <p className='m-1 text-gray-400'>General</p>
          {links.map((link) => (
            <Menu.Item key={link.label}>
              {({ active }) => (
                <a
                  className={`w-40 p-1 ${active && 'rounded-md bg-zinc-700'}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
