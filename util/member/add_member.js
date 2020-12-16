import firebase from '../../config/firebase'
import uploadAvatar from './upload_avatar'

const db = firebase.firestore()

export default async function addMember(data) {
  const collectionRef = db.collection('members')

  const newMember = await collectionRef.add({
    name: data.name,
    nickname: data.nickname,
  })

  if ('avatar' in data) {
    await uploadAvatar(data.avatar, newMember.id)
  }
}
