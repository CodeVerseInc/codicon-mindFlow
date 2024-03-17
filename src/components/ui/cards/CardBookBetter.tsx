import Image from 'next/image'

interface CardBookBetterProps {
	image: string
	title: string
	description: string
}

export const CardBookBetter = ({
	image,
	title,
	description
}: CardBookBetterProps) => {
	return (
		<div className='flex items-center gap-3 rounded-lg bg-gradient-to-b from-tom-thumb-500 to-tom-thumb-600 p-5 mb-3'>
			<Image
				src={image}
				alt=''
				className='rounded-lg md:w-20 md:h-20'
				width={92}
				height={92}
			/>
			<div className='flex flex-col'>
				<h3 className='font-semibold text-black'>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
