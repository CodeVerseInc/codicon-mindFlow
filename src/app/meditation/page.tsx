import { Timer } from '@/components/timer'
import { Calendar } from '@/components/timer/components/Calendar'

export default function Meditation() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Timer />
      <div>
        <Calendar />
      </div>
    </main>
  )
}
