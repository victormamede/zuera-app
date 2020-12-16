export default function Moment({ data }) {
  return (
    <div className='box'>
      <div className='media'>
        <div className='media-left'>
          <figure className='image is-64x64'>
            <img
              className='is-rounded'
              src='https://bulma.io/images/placeholders/128x128.png'
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
