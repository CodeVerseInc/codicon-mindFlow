import { IconHome } from '@tabler/icons-react'
import Image from 'next/image'

const rutes = [
  {
    name: 'Inicio',
    icon: <IconHome stroke={2} className='text-color-icon' />,
  },
]

// Hay que hacer una clase active se hace haciendo un estado setIsActive isActive y la condicion sera
// isActive? '(estilos al momento de clickear)'
// Usando arreglo rutes hacer un map que cada que hagan clic en un item del map, se ponga isActive para que active los estilos

export const SideBar = () => {
  return (
    <div dir='rtl' className=''>
      <div className='fixed w-1/2 flex flex-col items-center justify-start bg-tom-thumb-200 min-h-screen'>
        <div className='flex items-center'>
          <Image
            src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562810/mindflow-logo.webp'
            alt='Logo Mindflow'
            height={100}
            width={100}
          />
          <span className='font-bold uppercase text-text-logo'>mindflow</span>
        </div>
        <div className='flex flex-col gap-4'>
          <div>{/* Profile Image */}</div>
          <div>
            <span className='text-color-tex-pr text-sm'>¡Qué bueno verte!</span>
            <p className='font-semibold text-color-text-name-profile text-lg'>
              Mike Rooss
            </p>
          </div>
          <div>
            <span className='bg-gradient-to-r from-color-box to-color-box-secundary p-2 font-semibold text-white rounded-md'>
              helpful
            </span>
          </div>
          <hr className='w-full h-1 mx-auto my-4 bg-color-separator border-0 rounded md:my-10' />
        </div>
        <div>
          <ul>
            <li className=' font-semibold flex items-center gap-2 text-lg'>
              <span>Inicio</span>
              <IconHome stroke={2} className='text-color-icon' />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
