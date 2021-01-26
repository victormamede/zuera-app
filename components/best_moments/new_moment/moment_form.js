import { forwardRef, useImperativeHandle, useState } from 'react'
import { useForm } from 'react-hook-form'
import AvatarImage from '../../members/avatar'

const MomentForm = forwardRef(
  ({ authorOptions, isSubmitting, onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      watch,
      errors,
      getValues,
      reset,
    } = useForm()
    const [currentAuthor, authorHandler] = useState()
    const today = new Date().toISOString().substr(0, 10)

    useImperativeHandle(ref, () => ({
      reset: () => {
        reset()
        authorHandler(undefined)
      },
    }))

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='media'>
        <div className='media-left'>
          <AvatarImage
            src={currentAuthor?.avatarImage}
            alt={currentAuthor?.nickname}
          />
        </div>

        <div className='media-content'>
          <div className='field'>
            <p className='control'>
              <textarea
                name='content'
                placeholder='Insira a mensagem...'
                className={'textarea' + (errors.content ? ' is-danger' : '')}
                ref={register({ required: true })}
              />
            </p>
          </div>

          <nav className='level'>
            <div className='level-left'>
              <div className='level-item'>
                <div className='field'>
                  <div className='control'>
                    <div
                      className={'select' + (errors.author ? ' is-danger' : '')}
                    >
                      <select
                        name='author'
                        ref={register({ required: true })}
                        onChange={(e) =>
                          authorHandler(authorOptions[e.target.value])
                        }
                      >
                        <option value=''>Selecione o Autor</option>
                        {Object.entries(authorOptions).map(
                          ([id, author], index) => (
                            <option key={index} value={id}>
                              {author.name}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='level-item'>
                <div className='field'>
                  <div className='control'>
                    <input
                      defaultValue={today}
                      name='date'
                      ref={register({ required: true })}
                      className={'input' + (errors.date ? ' is-danger' : '')}
                      type='date'
                    />
                  </div>
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
          </nav>
        </div>
      </form>
    )
  }
)

export default MomentForm
