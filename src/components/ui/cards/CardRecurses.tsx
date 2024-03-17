import Link from 'next/link'
import Image from 'next/image'

interface CardRecursesProps {
	title: string
	link: string
}

export const CardRecurses = ({ title, link }: CardRecursesProps) => {
	return (
		<div className='bg-bg-gray h-22 rounded-lg p-5 flex dark:bg-bg-card-dark dark:bg-opacity-30  '>
			<Link
				href={link}
				target='_blank'
				className='flex justify-center items-center gap-x-5'>
				<div>
					<h4 className=' font-bold text-black dark:text-white'>{title}</h4>
				</div>
				<picture className='bg-bg-gray h-10 w-10 rounded-full flex items-center justify-center '>
					<Image
						src='https://res.cloudinary.com/dlklqucye/image/upload/v1710686627/solar_play-broken_iqw8hx.webp'
						alt=''
						width={20}
						height={20}
					/>
				</picture>
			</Link>
		</div>
	)
}
