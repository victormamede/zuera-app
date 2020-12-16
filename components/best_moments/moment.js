import { DateTime } from 'luxon'

export default function Moment({ data }) {
  const date = DateTime.fromISO(data.date)

  return (
    <div className='timeline-item'>
      <figure className='timeline-marker is-image is-32x32'>
        <p className='image is-32x32'>
          <img src='https://bulma.io/images/placeholders/128x128.png' />
        </p>
      </figure>
      <div className='timeline-content'>
        <p className='heading'>{date.toLocaleString()}</p>
        <p style={{ whiteSpace: 'pre' }} className='box'>
          <strong>{data.author.name}</strong> <i>({data.author.nickname})</i>
          <br />
          {data.content}
        </p>
      </div>
    </div>
  )
}
