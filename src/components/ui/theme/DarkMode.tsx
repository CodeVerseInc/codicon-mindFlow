'use client'
import { IconMoon } from '@tabler/icons-react'
import { useState, useEffect } from 'react'

export const DarkModeToggle = () => {
	const [theme, setTheme] = useState(() => {
		if (
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark'
		}
		return 'light'
	})

	useEffect(() => {
		if (theme === 'light') {
			document.querySelector('html')?.classList.remove('dark')
		} else {
			document.querySelector('html')?.classList.add('dark')
		}
	}, [theme])

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	// Aplica las clases de Tailwind CSS basadas en el estado del modo oscuro
	return (
		<div>
			<button
				onClick={handleChangeTheme}
				className={`absolute top-4 right-4 p-2 rounded-md `}>
				<IconMoon stroke={2} className='text-white cursor-pointer' />
			</button>
			{/* Resto de tu aplicación aquí */}
		</div>
	)
}
