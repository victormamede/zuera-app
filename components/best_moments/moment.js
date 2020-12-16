import Image from 'next/image'

export default function Moment({ data }) {
  return (
    <div className='box'>
      <div className='media'>
        <div className='media-left'>
          <figure className='image is-64x64'>
            <Image
              className='is-rounded'
              src={data.author.avatarImage || '/avatar.png'}
              width={32}
              height={32}
              layout='responsive'
              alt='Image'
            />
          </figure>
        </div>

        <div className='content'>
          <p style={{ whiteSpace: 'pre' }}>
            <strong>{data.author.name}</strong> <i>({data.author.nickname})</i>
            <br />
            {data.content}
          </p>
        </div>

        <div className='media-right'>
          <button className='delete'></button>
        </div>
      </div>
    </div>
  )
}
