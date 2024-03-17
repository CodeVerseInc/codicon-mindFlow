import Image from 'next/image'

interface CardProps {
	profilePhoto: string
	title: string
	body: string
}

export const Card = ({ profilePhoto, title, body }: CardProps) => {
	return (
		<div className='w-60 h-52 bg-white rounded-lg p-5 flex flex-col justify-between  '>
			<div className='flex items-center jsu gap-x-5'>
				<Image
					src={profilePhoto}
					alt={title}
					className='rounded-full'
					width={60}
					height={60}
				/>
				<h3 className='font-semibold '>{title}</h3>
			</div>
			<p className='text-xs'>{body}</p>
			<a
				href='/'
				className=' w-20 text-center cursor-pointer py-1 px-2 bg-gray-button rounded-xl text-xs font-semibold'>
				Ver más
			</a>
		</div>
	)
}
