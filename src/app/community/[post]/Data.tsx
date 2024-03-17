import { Input } from '@/components'

import { getData } from '@/services'
import Image from 'next/image'
import { Form } from './Form'

export const Data = async ({ user }: any) => {
	const userData = await getData(`https://dummyjson.com/users/${user}`)
	const userDataPost = await getData(`https://dummyjson.com/posts/${user}`)

	const { firstName, lastName, image } = userData
	const { title, body } = userDataPost

	return (
		<div className='flex flex-col md:justify-center md:items-center mx-4 my-4 gap-4'>
			<div className='max-w-[600px] bg-white p-4 rounded-md flex flex-col gap-4'>
				<div className='flex gap-4 justify-center items-center'>
					<Image src={image} alt={firstName} width={50} height={50} />
					<p className='font-bold text-2xl dark:text-black '>{`${firstName} ${lastName}`}</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1 className='font-bold text-xl dark:text-black'>{title}</h1>
					<p className='dark:text-black'>{body}</p>
				</div>
			</div>
			<div className='md:min-w-[600px]'>
				<textarea
					className='w-full bg-color-icon focus:outline-none placeholder:text-white resize-none text-white p-4 h-16 rounded-md'
					placeholder='Comentar ...'
				/>
			</div>
		</div>
	)
}
