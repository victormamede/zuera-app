import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function MemberForm({ onSubmit, isSubmitting }) {
  const { register, handleSubmit, watch, errors, getValues } = useForm()
  const [avatarFileName, fileNameHandler] = useState('')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Nome</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input
                name='name'
                ref={register({ required: true })}
                className={'input' + (errors.name ? ' is-danger' : '')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Apelido</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input
                name='nickname'
                ref={register({ required: true })}
                className={'input' + (errors.nickname ? ' is-danger' : '')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Bio</label>
        <div className='control'>
          <textarea
            name='bio'
            ref={register({ required: true })}
            className={'textarea' + (errors.bio ? ' is-danger' : '')}
          />
        </div>
      </div>

      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <div className='file has-name'>
              <label className='file-label'>
                <input
                  className='file-input'
                  type='file'
                  name='avatar'
                  accept='image/png, image/jpeg'
                  ref={register({ required: true })}
                  onChange={(e) =>
                    fileNameHandler(e.target.files.item(0).name || '')
                  }
                />
                <span className='file-cta'>
                  <span className='file-icon'>
                    <i className='fas fa-upload' />
                  </span>
                  <span className='file-label'>Avatar</span>
                </span>
                <span className='file-name'>
                  {avatarFileName || 'Escolha um arquivo'}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <button
              className={
                'button is-primary' + (isSubmitting ? ' is-loading' : '')
              }
              type='submit'
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
