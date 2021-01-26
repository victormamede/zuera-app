import { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import firebase from '../config/firebase'
import ProfilePhoto from './auth/profile_photo'
import userContext from './user_context'

const Login = dynamic(() => import('./auth/login'), { ssr: false })

export default function Navbar() {
  const [isExpanded, navbarHandler] = useState(false)
  const [loginShow, loginHandler] = useState(false)
  const currentUser = useContext(userContext)

  const activeClass = isExpanded ? ' is-active' : ''
  return (
    <>
      <Login show={loginShow} onClose={() => loginHandler(false)} />
      <nav className='navbar is-light'>
        <div className='navbar-brand'>
          <Link href='/'>
            <a className='navbar-item'>
              <Image src='/icon.svg' width={230} height={64} />
            </a>
          </Link>
          <a
            role='button'
            className={'navbar-burger' + activeClass}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => navbarHandler(!isExpanded)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div className={'navbar-menu' + activeClass}>
          <div className='navbar-start'>
            <Link href='/'>
              <a className='navbar-item'>Home</a>
            </Link>

            <Link href='/best_moments'>
              <a className='navbar-item'>Momentos</a>
            </Link>

            <Link href='/members'>
              <a className='navbar-item'>Membros</a>
            </Link>
          </div>

          <div className='navbar-end'>
            {currentUser ? (
              <>
                <div className='navbar-item'>
                  <ProfilePhoto user={currentUser} />
                </div>
                <a
                  className='navbar-item is-link'
                  onClick={() => firebase.auth().signOut()}
                >
                  Sair
                </a>
              </>
            ) : (
              <a
                className='navbar-item is-link'
                onClick={() => {
                  loginHandler(true)
                }}
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
