import { Menu } from '@headlessui/react';
import { TbDotsVertical } from 'react-icons/tb';

const links = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/developers', label: 'Developers' },
];

export function Dropdown() {
  return (
    <Menu as='div' className='relative' title='More'>
      <Menu.Button className='flex'>
        <TbDotsVertical size={22} />
      </Menu.Button>

      <Menu.Items className='absolute top-8 flex flex-col gap-2 rounded-md bg-zinc-800 px-2 py-2'>
        <p className='m-1 text-gray-400'>General</p>
        {links.map((link) => (
          <Menu.Item key={link.label}>
            {({ active }) => (
              <a className={`w-40 p-1 ${active && 'rounded-md bg-zinc-700'}`} href={link.href}>
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
