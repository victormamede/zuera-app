import firebase from '../../config/firebase'
import Moment from './moment'

const db = firebase.firestore()

export default function MomentList({ moments }) {
  return (
    <sector className='timeline'>
      <header className='timeline-header'>
        <span className='tag is-medium is-primary'>Hoje</span>
      </header>
      {moments.map((moment, index) => (
        <Moment key={index} data={moment} />
      ))}
    </sector>
  )
}

export async function getMoments() {
  const [members, moments] = await Promise.all([
    getMembers(),
    db.collection('moments').orderBy('date').get(),
  ])

  const joined = []
  moments.forEach((moment) => {
    const data = moment.data()

    const parsed = {
      author: members[data.author.id],
      date: data.date.toDate().toISOString(),
      content: data.content.replace('\\n', '\n'),
    }

    joined.push(parsed)
  })

  console.log(joined)

  return joined
}

async function getMembers() {
  const members = await db.collection('members').get()

  const joined = {}

  members.forEach((member) => {
    joined[member.id] = member.data()
  })

  return joined
}
