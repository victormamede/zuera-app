import firebase from '../../config/firebase'

const storageRef = firebase.storage().ref()
const db = firebase.firestore()

export default async function uploadAvatar(file, memberId) {
  const fileNameData = file.name.split('.')

  const path = `avatars/${memberId}.${fileNameData[fileNameData.length - 1]}`

  const fileRef = storageRef.child(path)

  const snapshot = await fileRef.put(file)
  const downloadUrl = await snapshot.ref.getDownloadURL()

  // Update user avatar in database
  await db
    .collection('members')
    .doc(memberId)
    .update({ avatarImage: downloadUrl })
}
