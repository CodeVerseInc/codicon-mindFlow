'use client'
import { useState } from 'react'
import Image from 'next/image'
import {
	IconBooks,
	IconFolder,
	IconHome,
	IconMenu2,
	IconPlant2,
	IconUsers,
	icons
} from '@tabler/icons-react'
import Link from 'next/link'

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
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<>
			<nav className='fixed top-0 z-50 w-full md:w-72 bg-white shadow-lg md:shadow-none'>
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
									className=''
									alt='MindFlow'
									width={70}
									height={70}
								/>
								<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-tom-thumb-500'>
									Mind Flow
								</span>
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<aside
				className={`fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} bg-white sm:translate-x-0 `}>
				<div className='mt-10 p-10'>
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
			</aside>
			{isOpen && (
				<div
					onClick={closeMenu}
					className='fixed inset-0 bg-black opacity-50 z-30'></div>
			)}
		</>
	)
}
