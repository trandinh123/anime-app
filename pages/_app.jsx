import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import Fallback from '../components/Fallback'
import React from 'react'
import store from '../store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    }
    const handleStop = () => {
      setLoading(false);
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <Provider store={store}>
      {
        loading ? <Fallback/> : <Component {...pageProps} />
      }
    </Provider>
  )
}