import { Timer } from '@/components/timer'
import { Mood } from '@/components/timer/components/Mood'

export default function Meditation() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Timer />
      <Mood />
      <div></div>
      <div></div>
      <div></div>
    </main>
  )
}
