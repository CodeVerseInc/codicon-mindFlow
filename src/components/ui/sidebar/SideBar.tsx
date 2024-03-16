'use client'
import { useState } from 'react'
import Image from 'next/image'
import {
	IconBooks,
	IconFolder,
	IconHome,
	IconLogout,
	IconMenu2,
	IconMoon,
	IconPlant2,
	IconUser,
	IconUsers
} from '@tabler/icons-react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const ROUTES = [
	{
		name: 'Inicio',
		icon: <IconHome stroke={2} className='text-color-icon' />
	},
	{
		name: 'Meditacion',
		icon: <IconPlant2 stroke={2} className='text-color-icon' />
	},
	{
		name: 'Comunidad',
		icon: <IconUsers stroke={2} className='text-color-icon' />
	},
	{
		name: 'Recursos',
		icon: <IconFolder stroke={2} className='text-color-icon' />
	},
	{
		name: 'Libreria',
		icon: <IconBooks stroke={2} className='text-color-icon' />
	}
]

export const SideBar = () => {
	const { data: session } = useSession()
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<>
			<nav className='fixed top-0 z-50 w-full md:w-80 bg-white shadow-lg md:shadow-none'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start rtl:justify-end'>
							<button
								onClick={toggleMenu}
								className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
								<IconMenu2 size={24} />
							</button>
							<Link href='/' className='flex ms-2 md:me-24'>
								<Image
									src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562810/mindflow-logo.webp'
									alt='Logo Mindflow'
									height={100}
									width={100}
								/>
								<span className='self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-tom-thumb-500'>
									MINDFLOW
								</span>
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<aside
				className={`fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} bg-white sm:translate-x-0 `}>
				<div className='mt-32 md:mt-12'>
					{session?.user ? (
						<div className='flex flex-col gap-4 md:flex-row items-center justify-between px-5'>
							{/* Image Profile */}
							<div>
								<Image
									src={
										session.user.image ||
										'https://res.cloudinary.com/dlklqucye/image/upload/v1710562891/img-login.webp'
									}
									alt='Logo Mindflow'
									className='rounded-full'
									height={60}
									width={60}
								/>
							</div>
							{/* Data user */}
							<div>
								<span className='text-color-tex-pr text-xs'>
									¡Qué bueno verte!
								</span>
								<p className='font-semibold text-color-text-name-profile text-sm md:text-lg'>
									{session.user.name}
								</p>
							</div>
							<div>
								<span className='bg-gradient-to-r from-color-box to-color-box-secundary p-2 font-semibold text-white rounded-md'>
									Helpful
								</span>
							</div>
						</div>
					) : (
						<div className='text-center'>
							<span>Para disfrutar de mas </span>
							<Link
								href='/auth/login'
								className='text-center text-tom-thumb-500 font-semibold'>
								Iniciar sesión
							</Link>
						</div>
					)}
					<hr className=' w-60 h-1 mx-auto my-4 bg-color-separator border-0 rounded md:my-10 px-10' />

					{/*  Routes App */}
					<div className='px-10'>
						<ul className=''>
							{ROUTES.map((route, index) => (
								<li
									key={index}
									className='flex items-center justify-start gap-6 mb-5'>
									{route.icon}
									<Link href={route.name.toLowerCase()} className='font-medium'>
										{route.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* Bar bottom */}
				<div className='h-16 bg-gradient-to-b from-tom-thumb-500 to-tom-thumb-600 absolute bottom-0 w-full flex items-center justify-center gap-6'>
					{session?.user ? (
						<button
							onClick={async () => {
								await signOut({
									callbackUrl: '/'
								})
							}}>
							<IconLogout stroke={2} className='text-white cursor-pointer' />
						</button>
					) : null}

					<Link href='/'>
						{' '}
						<IconUser stroke={2} className='text-white cursor-pointer' />
					</Link>
					<Link href='/'>
						<IconMoon stroke={2} className='text-white cursor-pointer' />
					</Link>
				</div>
			</aside>
			{isOpen && (
				<div
					onClick={closeMenu}
					className='fixed inset-0 bg-black opacity-50 z-30'></div>
			)}
		</>
	)
}
