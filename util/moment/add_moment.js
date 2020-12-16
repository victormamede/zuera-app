import firebase from '../../config/firebase'

const db = firebase.firestore()

export default async function addMoment(moment) {
  const collectionRef = db.collection('moments')
  const userRef = db.collection('members').doc(moment.author)

  await collectionRef.add({
    author: userRef,
    content: moment.content,
    date: firebase.firestore.Timestamp.fromDate(moment.date),
  })
}
