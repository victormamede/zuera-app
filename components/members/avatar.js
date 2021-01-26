import Image from 'next/image'

export default function AvatarImage({ src, alt }) {
  return (
    <figure className='image is-64x64'>
      <Image
        className='is-rounded'
        src={src || '/avatar.png'}
        width={32}
        height={32}
        layout='responsive'
        objectFit='cover'
        alt={alt && alt + "'s avatar"}
      />
    </figure>
  )
}
