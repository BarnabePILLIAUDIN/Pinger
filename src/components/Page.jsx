import Head from 'next/head';
import React from 'react';

const Page = (props) => {
  const {title,children} = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          children
        }
      </main>
    </>
  );
};

export default Page;