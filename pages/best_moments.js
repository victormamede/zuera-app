import Layout from '../components/layout'
import MomentList, { getMoments } from '../components/best_moments/moment_list'

export default function BestMoments({ moments }) {
  return (
    <Layout>
      <div className='container mt-2'>
        <MomentList moments={moments} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const moments = await getMoments()

  return {
    props: {
      moments,
    },
  }
}
