import firebase from '../../config/firebase'

const db = firebase.firestore()

export default async function getMoments(members) {
  const moments = await db.collection('moments').orderBy('date', 'desc').get()

  const joined = []
  moments.forEach((moment) => {
    const data = moment.data()

    const parsed = {
      id: moment.id,
      author: members[data.author.id],
      date: data.date.toDate().toISOString(),
      content: data.content.replace('\\n', '\n'),
      votes: {
        up: data.upvotes?.length || 0,
        down: data.downvotes?.length || 0,
      },
    }

    joined.push(parsed)
  })

  return joined
}
