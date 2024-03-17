'use client'

import {
  IconPlayerPlay,
  IconPlayerPause,
  IconRotateClockwise,
} from '@tabler/icons-react'
import useTimer from '../hooks/useTimer'

export const Timer = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer('sleep')

  const formattedTime = `${timer.min.toString().padStart(2, '0')}:${timer.sec
    .toString()
    .padStart(2, '0')}`

  return (
    <div className='flex flex-col gap-4 m-4'>
      <div className='rounded-full min-w-[250px] min-h-[250px] bg-gradient-to-r from-color-box to-color-box-secundary flex justify-center items-center'>
        <span className='text-6xl font-bold text-white'>{formattedTime}</span>
      </div>
      <div className='flex justify-center items-center gap-4'>
        <div
          className='bg-color-bg-circle p-2 rounded-full hover:bg-gradient-to-r from-color-box to-color-box-secundary'
          onClick={startTimer}
          aria-disabled={isRunning}
        >
          <IconPlayerPlay
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            onClick={startTimer}
            aria-disabled={isRunning}
          />
        </div>
        <div
          className='bg-color-bg-circle p-2 rounded-full'
          onClick={stopTimer}
          aria-disabled={!isRunning}
        >
          <IconPlayerPause
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            onClick={stopTimer}
            aria-disabled={!isRunning}
          />
        </div>
        <div
          className='bg-color-bg-circle p-2 rounded-full'
          onClick={resetTimer}
        >
          <IconRotateClockwise
            stroke={2}
            size={40}
            className='text-color-icon-meditation'
            onClick={stopTimer}
            aria-disabled={!isRunning}
          />
        </div>
      </div>
    </div>
  )
}
