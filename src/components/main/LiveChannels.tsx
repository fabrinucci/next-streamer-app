import React from 'react';
import channels from 'data/channels.json';
import { LiveChannelItem } from './';

export const LiveChannels = () => {
  return (
    <section>
      <h2 className='mt-3 text-xl font-semibold'>
        <span className='text-emerald-400'>Live channels</span> we think you&apos;ll like
      </h2>
      <div className='mt-3 mb-10 grid justify-items-center gap-y-10 gap-x-3 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4'>
        {channels.map((channel) => (
          <LiveChannelItem key={channel.id} channel={channel} />
        ))}
      </div>
    </section>
  );
};
