import { useRef, useState } from 'react'
import MomentForm from './moment_form'
import addMoment from '../../../util/moment/add_moment'

export default function NewMoment({ members }) {
  const [isSubmitting, submitHandler] = useState(false)
  const [message, messageHandler] = useState(null)
  const form = useRef()

  const onSubmit = async (data) => {
    submitHandler(true)

    data.date = new Date(data.date)

    try {
      await addMoment(data)
      messageHandler({
        status: 'success',
        message:
          'Momento adicionado com sucesso, recarregue a página para ver alterações',
      })
      form.current?.reset()
    } catch (e) {
      messageHandler({
        status: 'danger',
        message: 'Não foi possível adicionar o momento',
      })
    } finally {
      submitHandler(false)
    }
  }

  return (
    <div className='container m-2'>
      <MomentForm
        authorOptions={members}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        ref={form}
      />
      <br />
      {message && (
        <p className={'content has-text-' + message.status}>
          {message.message}
        </p>
      )}
    </div>
  )
}
