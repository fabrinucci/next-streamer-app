import type { ReactElement } from 'react';

import { Layout } from 'components/layouts';
import { SideMenu } from 'components/main';

export default function Home() {
  return (
    <div>
      <SideMenu />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='BosStream'>{page}</Layout>;
};
