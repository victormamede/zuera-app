import { useState } from 'react'
import AvatarImage from '../members/avatar'
import firebase from '../../config/firebase'

const db = firebase.firestore()

export default function Moment({ data }) {
  const [deleting, deleteHandler] = useState('ready')

  const deleteMoment = async () => {
    deleteHandler('deleting')
    await db.collection('moments').doc(data.id).delete()
    deleteHandler('deleted')
  }

  if (deleting != 'ready') {
    return (
      <div className='box'>
        {deleting == 'deleting' ? (
          <progress className='progress is-danger' />
        ) : (
          <p className='content has-text-danger'>Momento excluído</p>
        )}
      </div>
    )
  }

  return (
    <div className='box'>
      <div className='media'>
        <div className='media-left'>
          <AvatarImage
            src={data.author.avatarImage}
            alt={data.author.nickname}
          />
        </div>

        <div className='media-content'>
          <div className='content'>
            <p style={{ whiteSpace: 'pre-wrap' }}>
              <strong>{data.author.name}</strong>{' '}
              <i>({data.author.nickname})</i>
              <br />
              {data.content}
            </p>
          </div>
        </div>

        <div className='media-right'>
          <button className='delete' onClick={deleteMoment} />
        </div>
      </div>
    </div>
  )
}
