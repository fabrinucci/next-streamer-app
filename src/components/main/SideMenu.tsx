import React from 'react';
import data from 'data/data.json';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';
import { FiVideo } from 'react-icons/fi';

export const SideMenu = () => {
  return (
    <nav className='fixed h-full w-14 overflow-y-scroll bg-zinc-800 sm:w-16 lg:w-[15rem]'>
      <section className='border-b-2 border-zinc-700 p-3'>
        <h2 className='hidden text-sm font-semibold uppercase lg:block'>
          Recommended channels
        </h2>
        <div
          title='Recommended Channels'
          className='flex items-center justify-center lg:hidden'
        >
          <FiVideo size={23} />
        </div>
      </section>
      <section className='mb-16'>
        {data.map((user) => (
          <div
            className='flex cursor-pointer justify-between p-2 lg:pr-4 lg:duration-150 lg:ease-out lg:hover:bg-slate-700'
            key={user.id}
          >
            <div className='flex items-center justify-start gap-3'>
              <Image
                className=''
                src={user.avatar}
                alt={user.username}
                width={40}
                height={40}
              />
              <div className='hidden lg:block'>
                <h2 className='text-[.9rem] font-semibold'>{user.username}</h2>
                <p className='text-[.9rem] text-gray-300'>{user.game_name}</p>
              </div>
            </div>
            <div className='hidden lg:flex lg:items-center lg:justify-center'>
              <RxDotFilled size={25} color='#eb0400' />
              <p>{user.viewers}K</p>
            </div>
          </div>
        ))}
      </section>
    </nav>
  );
};
