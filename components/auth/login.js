import { useEffect } from 'react'
import firebase from '../../config/firebase'

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const ui = new firebaseui.auth.AuthUI(firebase.auth())

export default function Login({ show, onClose }) {
  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
      signInSuccessUrl: 'test',
      callbacks: {
        signInSuccessWithAuthResult: () => {
          onClose()
          return false
        },
      },
    })
  }, [])

  return (
    <div className={'modal' + (show ? ' is-active' : '')}>
      <div className='modal-background' onClick={onClose} />
      <div className='modal-content'>
        <div id='firebaseui-auth-container' />
      </div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={onClose}
      />
    </div>
  )
}
