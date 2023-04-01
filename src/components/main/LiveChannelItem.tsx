import React from 'react';
import Image from 'next/image';
import { Channel } from 'interfaces';

interface Props {
  channel: Channel;
}

export const LiveChannelItem = ({ channel }: Props) => {
  const { avatar, game, title, username, viewers, image, tags } = channel;
  return (
    <article>
      <div className='relative cursor-pointer rounded-sm bg-gray-600'>
        <Image className='rounded-sm' src={image} alt={title} height={450} width={450} />
        <div className='absolute top-[10px] left-[10px] h-5 w-10 rounded-[.25rem] bg-[#eb0400]'>
          <p className='text-center text-sm font-semibold uppercase text-white'>Live</p>
        </div>
        <div className='absolute bottom-[10px] left-[10px] h-5 w-[5.5rem] rounded-[.25rem] bg-[rgb(14,14,16,.7)]'>
          <p className='text-center text-sm text-white'>{viewers}K viewers</p>
        </div>
      </div>
      <div className='mt-3 flex gap-3'>
        <div className='cursor-pointer'>
          <Image
            className='rounded-full'
            src={avatar}
            alt={username}
            height={45}
            width={45}
          />
        </div>
        <div>
          <h3
            title={title}
            className='cursor-pointer text-lg font-semibold hover:text-emerald-500 hover:duration-200 hover:ease-in'
          >
            {title}
          </h3>
          <p title={username} className='cursor-pointer text-[.95rem] text-gray-400'>
            {username}
          </p>
          <p className='cursor-pointer text-[.95rem] text-gray-400 hover:text-emerald-500 hover:duration-200 hover:ease-in'>
            {game}
          </p>
          <ul className='mt-2 flex gap-2'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className='cursor-pointer rounded-full bg-zinc-800 py-[.1rem] px-3 text-sm font-bold text-gray-400 hover:bg-zinc-700 hover:transition-all'
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
