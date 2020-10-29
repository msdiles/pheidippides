import '../styles/globals.scss'
import {AppProps} from "next/app"
import Head from "next/head"

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    </Head>
    <Component {...pageProps} />
    </>
}

export default MyApp
