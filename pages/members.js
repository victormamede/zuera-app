import Layout from '../components/layout'
import MemberList from '../components/members/member_list'
import NewMember from '../components/members/new_member/new_member'
import getMembers from '../util/member/get_members'

export default function BestMoments({ members }) {
  return (
    <Layout>
      <MemberList members={members} />
      <div className='container p-2'>
        <NewMember />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const members = await getMembers()

  return {
    props: {
      members,
    },
    revalidate: 1,
  }
}
