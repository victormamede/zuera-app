import { useState } from 'react'
import addMember from '../../../util/member/add_member'
import MemberForm from './member_form'

export default function NewMember() {
  const [isSubmitting, submitHandler] = useState(false)

  const onSubmit = async (data) => {
    submitHandler(true)

    data.avatar = data.avatar[0]
    await addMember(data)

    location.reload()
  }

  return (
    <div className='container'>
      <MemberForm isSubmitting={isSubmitting} onSubmit={onSubmit} />
    </div>
  )
}
