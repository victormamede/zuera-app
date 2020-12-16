import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Zuera d Tudo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}
