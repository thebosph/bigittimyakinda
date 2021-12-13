import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>Bi'Gittim</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
