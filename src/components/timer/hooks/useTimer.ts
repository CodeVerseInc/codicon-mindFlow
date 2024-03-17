import { useState, useEffect } from 'react'

interface Timer {
  min: number
  sec: number
}

const useTimer = (
  mood: string
): {
  timer: Timer
  isRunning: boolean
  startTimer: () => void
  stopTimer: () => void
  resetTimer: () => void
} => {
  const [timer, setTimer] = useState<Timer>({ min: 0, sec: 0 })
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const assignTimer = () => {
      switch (mood) {
        case 'all':
          setTimer({ min: 10, sec: 0 })
          break
        case 'sleep':
          setTimer({ min: 15, sec: 0 })
          break
        case 'relax':
          setTimer({ min: 5, sec: 0 })
          break
        case 'happy':
          setTimer({ min: 3, sec: 0 })
          break
        case 'tired':
          setTimer({ min: 8, sec: 0 })
          break
        default:
          setTimer({ min: 0, sec: 0 })
      }
    }

    assignTimer()

    return () => clearInterval(intervalId!)
  }, [mood])

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer.min === 0 && prevTimer.sec === 0) {
            clearInterval(id)
            setIsRunning(false)
            return prevTimer
          }

          const newMin = prevTimer.sec === 0 ? prevTimer.min - 1 : prevTimer.min
          const newSec = prevTimer.sec === 0 ? 59 : prevTimer.sec - 1
          return { min: newMin, sec: newSec }
        })
      }, 1000)
      setIntervalId(id)
    } else {
      clearInterval(intervalId!)
      setIntervalId(null)
    }

    return () => clearInterval(intervalId!)
  }, [isRunning])

  const startTimer = (): void => {
    setIsRunning(true)
  }

  const stopTimer = (): void => {
    setIsRunning(false)
    console.log('uwu')
  }

  const resetTimer = (): void => {
    setIsRunning(false)
    setTimer({ min: 0, sec: 0 })
  }

  return { timer, isRunning, startTimer, stopTimer, resetTimer }
}

export default useTimer
