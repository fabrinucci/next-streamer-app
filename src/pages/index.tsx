import type { ReactElement } from 'react';
import Link from 'next/link';

import { Layout } from 'components/layouts';
import { Hero, LiveChannels, IconBar, SideMenu, CategoriesList } from 'components/main';

export default function Home() {
  return (
    <>
      <div className='pt-16'>
        <SideMenu />
        <main className='ml-[56px] px-6 lg:ml-[242px]'>
          <Hero />
          <LiveChannels />
          <CategoriesList />
          <IconBar />
        </main>
      </div>
      <footer className='mx-auto ml-[56px] mt-16 border-t border-[#2e2e35] p-10 lg:ml-[242px]'>
        <h2 className='text-center text-xl font-semibold'>
          Make by{' '}
          <Link
            href='https://github.com/fabrinucci'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='text-emerald-500 transition-all hover:text-emerald-400'>
              Fabrizio Nucci
            </span>
          </Link>
        </h2>
      </footer>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='BosStream'>{page}</Layout>;
};
