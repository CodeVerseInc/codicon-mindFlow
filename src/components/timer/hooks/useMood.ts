import { useState } from 'react'

export const useMood = (): {
  mood: string
  handleSetMood: (mood: string) => void
} => {
  const [mood, setMood] = useState('')

  const handleSetMood = (mood: string) => {
    setMood(mood)
  }

  console.log(mood)

  return { mood, handleSetMood }
}
