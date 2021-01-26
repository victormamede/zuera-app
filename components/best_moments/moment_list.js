import { DateTime } from 'luxon'
import Moment from './moment'

export default function MomentList({ moments }) {
  return (
    <div className='timeline'>
      <header className='timeline-header'>
        <span className='tag is-medium is-primary'>Linha do tempo</span>
      </header>
      {moments.map((moment, index) => (
        <div key={index} className='timeline-item'>
          <div className='timeline-marker' />
          <div className='timeline-content'>
            <p className='heading'>
              {DateTime.fromISO(moment.date).toLocaleString()}
            </p>
            <Moment data={moment} />
          </div>
        </div>
      ))}
    </div>
  )
}
