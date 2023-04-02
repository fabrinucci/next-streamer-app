import { FaChevronDown } from 'react-icons/fa';
import channels from 'data/channels.json';
import { LiveChannelItem } from './';

export const LiveChannels = () => {
  return (
    <section>
      <h2 className='mt-3 text-xl font-semibold'>
        <span className='text-emerald-500'>Live channels</span> we think you&apos;ll like
      </h2>
      <div className='mt-3 mb-10 grid justify-items-center gap-y-10 gap-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {channels.map((channel) => (
          <LiveChannelItem key={channel.id} channel={channel} />
        ))}
      </div>
      <div className='show-button'>
        <span className='z-10 bg-[#0E0E10] px-3'>
          <button className='z-20 rounded-sm bg-[#0E0E10] py-1 px-3 font-semibold text-emerald-500 duration-200 ease-in-out hover:bg-zinc-800 hover:text-white'>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-sm md:text-base'>Show more</span>
              <FaChevronDown />
            </div>
          </button>
        </span>
      </div>
    </section>
  );
};
