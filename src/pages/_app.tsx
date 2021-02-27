// import HeaderComp from "components/HeaderComp";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { Fragment } from "react";
import "../styles/index.scss";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Love Vision Foundation</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
