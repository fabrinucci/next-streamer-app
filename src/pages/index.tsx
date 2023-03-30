import type { ReactElement } from 'react';

import { Layout } from 'components/layouts';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='BosStream'>{page}</Layout>;
};
