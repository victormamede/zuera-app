import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function MemberForm({ onSubmit, isSubmitting }) {
  const { register, handleSubmit, watch, errors, getValues } = useForm()
  const [avatarFileName, fileNameHandler] = useState('')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='field'>
        <div className='control'>
          <input
            name='name'
            ref={register({ required: true })}
            className={'input' + (errors.date ? ' is-danger' : '')}
          />
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <input
            name='nickname'
            ref={register({ required: true })}
            className={'input' + (errors.date ? ' is-danger' : '')}
          />
        </div>
      </div>

      <div className='file has-name'>
        <label className='file-label'>
          <input
            className='file-input'
            type='file'
            name='avatar'
            accept='image/png, image/jpeg'
            ref={register({ required: true })}
            onChange={(e) => fileNameHandler(e.target.files.item(0).name || '')}
          />
          <span className='file-cta'>
            <span className='file-icon'>
              <i className='fas fa-upload' />
            </span>
            <span className='file-label'>Choose a file…</span>
          </span>
          <span className='file-name'>{avatarFileName}</span>
        </label>
      </div>

      <button
        className={'button is-primary' + (isSubmitting ? ' is-loading' : '')}
        type='submit'
      >
        Enviar
      </button>
    </form>
  )
}
