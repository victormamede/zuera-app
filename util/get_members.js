import firebase from '../config/firebase'

const db = firebase.firestore()

export default async function getMembers() {
  const members = await db.collection('members').get()

  const joined = {}

  members.forEach((member) => {
    joined[member.id] = member.data()
  })

  return joined
}
