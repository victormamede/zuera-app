import Layout from '../components/layout'
import MomentList from '../components/best_moments/moment_list'
import NewMoment from '../components/best_moments/new_moment/new_moment'

import getMembers from '../util/member/get_members'
import getMoments from '../util/moment/get_moments'

export default function BestMoments({ moments, members }) {
  return (
    <Layout>
      <div className='container mt-2'>
        <NewMoment members={members} />
        <MomentList moments={moments} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const members = await getMembers()
  const moments = await getMoments(members)

  return {
    props: {
      members,
      moments,
    },
    revalidate: 1,
  }
}
