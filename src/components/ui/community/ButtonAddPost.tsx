'use client'
import { IconPlus, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { FormAddPost } from './FormAddPost'

export const ButtonAddPost = () => {
	const { data: session } = useSession()
	const [openForm, setOpenForm] = useState(false)

	const handleToggleForm = () => {
		setOpenForm(!openForm)
	}

	const handleAddPostClick = () => {
		setOpenForm(true)
	}

	const handleCloseForm = () => {
		setOpenForm(false)
	}

	return (
		<div className=''>
			{session?.user ? (
				<div className='absolute right-0 p-5 bottom-0'>
					<button
						className='bg-tom-thumb-600 p-4 rounded-full'
						onClick={handleAddPostClick}>
						<IconPlus stroke={2} className='text-white' />
					</button>
				</div>
			) : null}

			{openForm && (
				<div className='fixed top-0 right-0 left-0  w-full h-full  bg-black bg-opacity-50'>
					<div className='w-96 h-96 bg-white rounded-lg p-5 relative mt-56 ml-16 md:ml-[600px] md:mt-20 2xl:ml-[800px] 2xl:mt-48'>
						<div className='flex justify-between'>
							<h2 className='text-center font-semibold text-2xl text-tom-thum-500'>
								Escribe tu historia
							</h2>
							<IconX stroke={2} onClick={handleCloseForm} />
						</div>
						<FormAddPost />
					</div>
				</div>
			)}
		</div>
	)
}
