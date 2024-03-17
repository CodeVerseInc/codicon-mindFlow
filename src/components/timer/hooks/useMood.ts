import { useState } from 'react'

export const useMood = (): {
  mood: string
  handleSetMood: (mood: string) => void
} => {
  const [mood, setMood] = useState('sleep')

  const handleSetMood = (mood: string) => {
    setMood(mood)
  }

  return { mood, handleSetMood }
}
