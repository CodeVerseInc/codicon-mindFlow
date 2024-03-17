import { useEffect, useRef } from 'react'

const useMusicPlayer = (mood: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Lógica para cargar la canción según el estado de ánimo
    let audioFile: string

    switch (mood) {
      case 'sleep':
        audioFile =
          'https://res.cloudinary.com/dlklqucye/video/upload/v1710690001/good-night-160166_mhc6p7.mp3'
        break
      case 'relax':
        audioFile =
          'https://res.cloudinary.com/dlklqucye/video/upload/v1710690001/good-night-160166_mhc6p7.mp3'
        break
      case 'happy':
        audioFile =
          'https://res.cloudinary.com/dlklqucye/video/upload/v1710690001/good-night-160166_mhc6p7.mp3'
        break
      case 'tired':
        audioFile =
          'https://res.cloudinary.com/dlklqucye/video/upload/v1710690001/good-night-160166_mhc6p7.mp3'
        break
      default:
        audioFile =
          'https://res.cloudinary.com/dlklqucye/video/upload/v1710690001/good-night-160166_mhc6p7.mp3'
    }

    if (audioRef.current) {
      audioRef.current.src = audioFile
    }
  }, [mood])

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play() // Reproduce la canción al llamar a la función play
    }
  }

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return { play, stop, audioRef }
}

export default useMusicPlayer
