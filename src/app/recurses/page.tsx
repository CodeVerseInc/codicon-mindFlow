import { IconPlayerPlay } from '@tabler/icons-react'

export default function Recurses() {
  return (
    <main className='m-4 flex gap-4'>
      <article className='bg-white w-[200px] h-[260px] p-3 flex flex-col rounded-lg gap-2'>
        <div className='flex'>
          <div className='w-1/3'>
            <div className='bg-color-bg-circle w-[50px] h-[50px] flex justify-center items-center rounded-full'>
              <IconPlayerPlay
                stroke={2}
                className='text-color-icon-meditation'
              />
            </div>
          </div>
          <p className='w-2/3 font-semibold text-xs'>
            Encontrando la Luz en la Oscuridad: Mi Viaje hacia la Motivación
          </p>
        </div>
        <div>
          <p className='text-xs'>
            Exploro los momentos difíciles que he enfrentado, cómo he encontrado
            fuerza en medio de la adversidad y cómo he aprendido a encender la
            chispa de la motivación incluso en los momentos más oscuros. A
            través de experiencias personales ...
          </p>
        </div>
      </article>
    </main>
  )
}
