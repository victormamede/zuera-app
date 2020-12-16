import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isExpanded, navbarHandler] = useState(false)

  const activeClass = isExpanded ? ' is-active' : ''
  return (
    <nav className='navbar is-light'>
      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item'>
            <h1 className='title'>ZdT</h1>
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
      </div>
    </nav>
  )
}
