import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from 'components/navbar';

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Fabrizio Nucci' />
        <meta name='title' content={title} />
        <meta name='description' content={`Info about ${title}`} />
        <meta name='keywords' content='stream, videos, bosstream' />
        <meta property='og:title' content={`Info about ${title}`} />
        <meta
          property='og:description'
          content={`Page where you will find info about ${title}.`}
        />
      </Head>

      <header>
        <Navbar />
      </header>

      <>{children}</>
    </>
  );
};
