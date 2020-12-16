import Layout from '../components/layout'
import Welcome from '../components/welcome'

export default function Home() {
  return (
    <Layout>
      <div className='hero is-primary is-bold is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container'>
            <Welcome />
          </div>
        </div>
      </div>
    </Layout>
  )
}
