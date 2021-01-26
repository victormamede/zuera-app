import Image from 'next/image'

export default function Member({ data, color, className }) {
  return (
    <div
      className={
        'hero is-bold is-fullheight' +
        ' is-' +
        color +
        (className ? ' ' + className : '')
      }
    >
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column'>
              <figure className='image'>
                <Image
                  className='is-rounded'
                  src={data.avatarImage || '/avatar.png'}
                  alt={data.name + "'s avatar"}
                  width={480}
                  height={480}
                  objectFit='cover'
                />
              </figure>
            </div>

            <div className='column'>
              <div className='container has-text-centered'>
                <h1 className='title'>{data.name}</h1>
                <p className='subtitle'>{data.nickname}</p>
                <p>{data.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
