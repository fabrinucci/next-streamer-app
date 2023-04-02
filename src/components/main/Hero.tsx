import React from 'react';

export const Hero = () => {
  return (
    <div id='hero' className='md:p-8 xl:p-12'>
      <div className='relative w-full overflow-hidden pt-[56.25%]'>
        <iframe
          className='absolute top-0 left-0 right-0 bottom-0 h-full w-full rounded-md'
          src='https://www.youtube.com/embed/Zsiwnn4384k'
          allowFullScreen
        />
      </div>
    </div>
  );
};
