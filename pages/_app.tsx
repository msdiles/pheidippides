import '../styles/globals.scss'
import {AppProps} from "next/app"
import Head from "next/head"
import {Provider} from "react-redux"
import {useStore} from "@/state/store"

function MyApp({Component, pageProps}: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
