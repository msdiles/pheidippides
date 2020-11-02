import '../styles/globals.scss'
import {AppProps} from "next/app"
import Head from "next/head"
import {Provider, useDispatch} from "react-redux"
import {useStore} from "@/state/store"
import SnackbarsHandler from "@/components/SnackbarsHandler"
import AuthProvider from "@/components/AuthProvider"
import {useEffect} from "react"
import {authRefreshStart} from "@/state/actions/auth.actions"
import StartDispatcher from "@/components/StartDispatcher"
import {NextPageContext} from "next"

function MyApp({Component, pageProps}: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return <>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

    </Head>
    <Provider store={store}>
      <StartDispatcher/>
      <SnackbarsHandler/>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  </>
}

export default MyApp

//TODO button back on auth page
//TODO add mobile
