import '../styles/global.scss'
import { useState, useEffect } from 'react'
import { Settings } from 'luxon'
import firebase from '../config/firebase'
import { UserProvider } from '../components/user_context'

Settings.defaultZoneName = 'utc'

export default function MyApp({ Component, pageProps }) {
  const [currentUser, userHandler] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      userHandler(user)
    })
  }, [])

  return (
    <UserProvider value={currentUser}>
      <Component {...pageProps} />
    </UserProvider>
  )
}
