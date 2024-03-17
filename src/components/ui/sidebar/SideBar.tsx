'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { DarkModeToggle } from '../theme/DarkMode'
import {
	IconBooks,
	IconFolder,
	IconHome,
	IconLogout,
	IconMenu2,
	IconPlant2,
	IconUser,
	IconUsers
} from '@tabler/icons-react'

import { usePathname } from 'next/navigation'

const ROUTES = [
	{
		name: 'Inicio',
		icon: <IconHome stroke={2} className='text-color-icon dark:text-white' />,
		route: '/'
	},
	{
		name: 'Meditacion',
		icon: <IconPlant2 stroke={2} className='text-color-icon dark:text-white' />,
		route: '/meditation'
	},
	{
		name: 'Comunidad',
		icon: <IconUsers stroke={2} className='text-color-icon dark:text-white' />,
		route: '/community'
	},
	{
		name: 'Recursos',
		icon: <IconFolder stroke={2} className='text-color-icon dark:text-white' />,
		route: '/recurses'
	},
	{
		name: 'Libreria',
		icon: <IconBooks stroke={2} className='text-color-icon dark:text-white' />,
		route: '/library'
	}
]

export const SideBar = () => {
	const { data: session } = useSession()
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<>
			<nav className='fixed top-0 z-50 w-full md:w-80 bg-white shadow-lg md:shadow-none dark:bg-bg-dark '>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start rtl:justify-end'>
							<button
								onClick={toggleMenu}
								className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden focus:ring-2 focus:ring-gray-200 dark:text-white'>
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
				className={`[grid-area:aside] fixed top-0 left-0 z-40 w-80 h-screen pt-5 2xl:pt-20 transition-transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} bg-white dark:bg-bg-dark sm:translate-x-0 `}>
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
						<div className='flex justify-center items-center flex-col gap-5 text-center'>
							<Image
								src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562891/img-login.webp'
								alt='Logo Mindflow'
								className='rounded-full'
								height={60}
								width={60}
							/>
							<Link
								href='/auth/login'
								className='text-center text-tom-thumb-500 font-semibold'
								onClick={closeMenu}>
								Iniciar sesión
							</Link>
						</div>
					)}
					<hr className=' w-60 h-1 mx-auto my-4 bg-color-separator border-0 rounded px-10' />

					{/*  Routes App */}
					<div className='px-10'>
						<ul className=''>
							{ROUTES.map((route) => (
								<li
									key={route.name}
									className={` ${
										pathname === route.route
											? 'bg-gradient-to-r from-color-box to-color-box-secundary rounded-lg'
											: ''
									} flex items-center justify-start gap-6 mb-5 bg-gradient-to-r p-5`}
									onClick={closeMenu}>
									{' '}
									{/* Cierra el menú al hacer clic en una opción */}
									{route.icon}
									<Link href={route.route} className='font-medium'>
										{route.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* Bar bottom */}
				<div className='h-16 bg-gradient-to-b from-tom-thumb-500 to-tom-thumb-600 absolute bottom-0 w-full flex flex-row-reverse items-center justify-evenly gap-6'>
					{session?.user ? (
						<button
							className=''
							title='Cerrar sesión'
							onClick={async () => {
								await signOut({
									callbackUrl: '/'
								})
							}}>
							<IconLogout stroke={2} className='text-white cursor-pointer' />
						</button>
					) : null}
					<DarkModeToggle />
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
