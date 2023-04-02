import type { ReactElement } from 'react';

import { Layout } from 'components/layouts';
import { Hero, LiveChannels, IconBar, SideMenu, CategoriesList } from 'components/main';

export default function Home() {
  return (
    <div className='pt-16'>
      <SideMenu />
      <main className='ml-[56px] px-6 lg:ml-[242px]'>
        <Hero />
        <LiveChannels />
        <CategoriesList />
        <IconBar />
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='BosStream'>{page}</Layout>;
};
