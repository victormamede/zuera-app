import { useForm } from 'react-hook-form'

export default function MomentForm({ authorOptions, isSubmitting, onSubmit }) {
  const { register, handleSubmit, watch, errors } = useForm()
  const today = new Date().toISOString().substr(0, 10)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='media'>
      <div className='media-left'>
        <figure className='image is-64x64'>
          <img
            className='is-rounded'
            src='https://bulma.io/images/placeholders/128x128.png'
            alt='Image'
          />
        </figure>
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
                    <select name='author' ref={register({ required: true })}>
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