// import HeaderComp from "components/HeaderComp";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import "../styles/index.scss";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  if (typeof window !== "undefined") {
    window?.addEventListener("load", () => {
      setLoading(false);
    });
  }

  if (loading) return <p>Loading...</p>;
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
