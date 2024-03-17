'use client'
import { IconPlus } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'

export const ButtonAddPost = () => {
	const { data: session } = useSession()

	return (
		<div className='p-5 absolute right-0 bottom-0'>
			{session?.user ? (
				<button className='bg-tom-thumb-600 p-6 rounded-full'>
					<IconPlus stroke={2} className='text-white' />
				</button>
			) : null}
		</div>
	)
}
