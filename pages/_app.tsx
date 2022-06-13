import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * initialize and render pages
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
