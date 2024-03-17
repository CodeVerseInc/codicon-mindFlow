'use client'

// Timer
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconRotateClockwise,
} from '@tabler/icons-react'
import useTimer from '../hooks/useTimer'
import { useMood } from '../hooks/useMood'

// Mood

import Image from 'next/image'
import FireTw from '../../../../public/assets/icons/twemoji_fire.svg'
import DissapointFace from '../../../../public/assets/icons/twemoji_disappointed-face.svg'
import GrinningFace from '../../../../public/assets/icons/twemoji_grinning-face-with-smiling-eyes.svg'
import KissingFace from '../../../../public/assets/icons/twemoji_kissing-face-with-smiling-eyes.svg'
import SleepyFace from '../../../../public/assets/icons/twemoji_sleepy-face.svg'
import useMusicPlayer from '../hooks/useMusicPlayer'

export const Timer = () => {
  const { mood, handleSetMood } = useMood()
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer(mood)
  const { play, stop, audioRef } = useMusicPlayer(mood)
  const formattedTime = `${timer.min.toString().padStart(2, '0')}:${timer.sec
    .toString()
    .padStart(2, '0')}`

  return (
    <div className='flex flex-col gap-4 m-4 items-center'>
      <div className='rounded-full min-w-[250px] min-h-[250px] bg-gradient-to-r from-color-box to-color-box-secundary flex justify-center items-center'>
        <span className='text-6xl font-bold text-white'>{formattedTime}</span>
      </div>
      <div className='flex justify-center items-center gap-4'>
        <div
          className='bg-color-bg-circle p-2 rounded-full hover:bg-gradient-to-r from-color-box to-color-box-secundary  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => {
            startTimer()
            play()
          }}
          aria-disabled={isRunning}
        >
          <IconPlayerPlay
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            aria-disabled={isRunning}
          />
        </div>
        <div
          className='bg-color-bg-circle p-2 rounded-full  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => {
            stopTimer()
            stop()
          }}
          aria-disabled={!isRunning}
        >
          <IconPlayerPause
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            aria-disabled={!isRunning}
          />
        </div>
        <div
          className='bg-color-bg-circle p-2 rounded-full  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer '
          onClick={resetTimer}
        >
          <IconRotateClockwise
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            aria-disabled={!isRunning}
          />
        </div>
      </div>
      <div className='flex mx-4 flex-wrap gap-6 items-center justify-center'>
        <div
          className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-5 rounded-full  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => handleSetMood('all')}
        >
          <Image src={FireTw} alt='fuego' width={36} height={36} />
          <span className='font-semibold'>Todos</span>
        </div>
        <div
          className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-5 rounded-full dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => handleSetMood('sleep')}
        >
          <Image src={SleepyFace} alt='fuego' width={36} height={36} />
          <span className='font-semibold'>Dormir</span>
        </div>
        <div
          className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-5 rounded-full dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => handleSetMood('relax')}
        >
          <Image src={KissingFace} alt='fuego' width={36} height={36} />
          <span className='font-semibold'>Relajarse</span>
        </div>
        <div
          className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-5 rounded-full  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => handleSetMood('happy')}
        >
          <Image src={GrinningFace} alt='fuego' width={36} height={36} />
          <span className='font-semibold'>Feliz</span>
        </div>
        <div
          className='bg-color-bg-circle min-w-[85px] min-h-[150px] flex flex-col justify-center items-center gap-5 rounded-full  dark:bg-bg-card-dark dark:bg-opacity-30 cursor-pointer'
          onClick={() => handleSetMood('tired')}
        >
          <Image src={DissapointFace} alt='fuego' width={36} height={36} />
          <span className='font-semibold'>Cansado</span>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  )
}
