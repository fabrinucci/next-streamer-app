import type { ReactElement } from 'react';
import { useSession } from 'next-auth/react';
import { Layout } from 'components/layouts';
import { Login, Profile } from 'components/account';

export default function Account() {
  const { data: session } = useSession();
  if (session) return <Profile />;

  return <Login />;
}

Account.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Account - BosStream'>{page}</Layout>;
};
