import '../styles/global.scss'
import { Settings } from 'luxon'

Settings.defaultZoneName = 'utc'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
