'use client'

import Image from 'next/image'
import FireTw from '../../../../public/assets/icons/twemoji_fire.svg'
import DissapointFace from '../../../../public/assets/icons/twemoji_disappointed-face.svg'
import GrinningFace from '../../../../public/assets/icons/twemoji_grinning-face-with-smiling-eyes.svg'
import KissingFace from '../../../../public/assets/icons/twemoji_kissing-face-with-smiling-eyes.svg'
import SleepyFace from '../../../../public/assets/icons/twemoji_sleepy-face.svg'
import useTimer from '../hooks/useTimer'
import { useMood } from '../hooks/useMood'

export const Mood = () => {
  const { handleSetMood } = useMood()
  return (
    <div className='flex mx-4 flex-wrap gap-6 items-center justify-center'>
      <div
        className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-8 rounded-full'
        onClick={() => handleSetMood('all')}
      >
        <Image src={FireTw} alt='fuego' width={36} height={36} />
        <span className='font-semibold'>Todos</span>
      </div>
      <div
        className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-8 rounded-full'
        onClick={() => handleSetMood('sleep')}
      >
        <Image src={SleepyFace} alt='fuego' width={36} height={36} />
        <span className='font-semibold'>Dormir</span>
      </div>
      <div
        className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-8 rounded-full'
        onClick={() => handleSetMood('relax')}
      >
        <Image src={KissingFace} alt='fuego' width={36} height={36} />
        <span className='font-semibold'>Relajarse</span>
      </div>
      <div
        className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-8 rounded-full'
        onClick={() => handleSetMood('happy')}
      >
        <Image src={GrinningFace} alt='fuego' width={36} height={36} />
        <span className='font-semibold'>Feliz</span>
      </div>
      <div
        className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-8 rounded-full'
        onClick={() => handleSetMood('tired')}
      >
        <Image src={DissapointFace} alt='fuego' width={36} height={36} />
        <span className='font-semibold'>Cansado</span>
      </div>
    </div>
  )
}
