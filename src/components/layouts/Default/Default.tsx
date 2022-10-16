import { FC, ReactNode } from 'react';
import { Footer, Header } from '../../modules';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | ETH Boilerplate`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <section>{children}</section>
    <Footer />
  </>
);

export default Default;
