import Image from 'next/image'
import { createHash } from 'crypto'

export default function ProfilePhoto({ user }) {
  if (user == null) {
    return <></>
  }

  const hash = createHash('md5').update(user.email).digest('hex')
  return (
    <figure className='image is-32x32'>
      <Image
        className='is-rounded'
        src={`https://www.gravatar.com/avatar/${hash}`}
        alt={user.displayName + "'s avatar"}
        width={480}
        height={480}
        objectFit='cover'
      />
    </figure>
  )
}
