import { useState } from 'react'
import MomentForm from './moment_form'
import addMoment from '../../../util/moment/add_moment'

export default function NewMoment({ members }) {
  const [isSubmitting, submitHandler] = useState(false)

  const onSubmit = async (data) => {
    submitHandler(true)

    data.date = new Date(data.date)

    await addMoment(data)

    location.reload()
  }

  return (
    <div className='container'>
      <MomentForm
        authorOptions={members}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
    </div>
  )
}
