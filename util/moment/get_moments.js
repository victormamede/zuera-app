import firebase from '../../config/firebase'

const db = firebase.firestore()

export default async function getMoments(members) {
  const moments = await db.collection('moments').orderBy('date', 'desc').get()

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

  return joined
}
