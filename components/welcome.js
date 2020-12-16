import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  const image = (
    <Image
      src='/zeno.png'
      width={730}
      height={1095}
      layout='responsive'
      alt='Zuera Logo'
      className='float-left'
    />
  )

  return (
    <div className='columns is-vcentered'>
      <div className='column is-7'>
        <div className='container has-text-centered'>
          <h1 className='title'>Zuera d tudo</h1>
          <h2 className='subtitle'>site real oficial</h2>
          <Link href='/best_moments'>
            <button className='button is-light is-rounded'>
              Melhores momentos
            </button>
          </Link>
        </div>
      </div>
      <div className='column is-5'>{image}</div>
    </div>
  )
}
