import Image from 'next/image'

export const SideBar = () => {
  return (
    <div>
      <div className='flex items-center'>
        <Image
          src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562810/mindflow-logo.webp'
          alt='Logo Mindflow'
          height={100}
          width={100}
        />
        <span className='font-bold uppercase text-text-logo'>mindflow</span>
      </div>
      <div>
        <div>{/* Profile Image */}</div>
        <div>
          <span>¡Qué bueno verte!</span>
          <p>Mike Rooss</p>
        </div>
        <div>
          <span>helpful</span>
        </div>
      </div>
      <div></div>
    </div>
  )
}
