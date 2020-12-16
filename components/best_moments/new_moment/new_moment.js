import { useState } from 'react'
import MomentForm from './moment_form'

export default function NewMoment({ members }) {
  const [isSubmitting, submitHandler] = useState(false)

  const onSubmit = async (data) => {
    submitHandler(true)

    const resp = await fetch('/api/moment', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    location.reload()
  }

  return (
    <MomentForm
      authorOptions={members}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
    />
  )
}
