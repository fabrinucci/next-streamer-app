import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from 'components/navbar';
import { SideMenu } from '../main';
import Link from 'next/link';

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
};
