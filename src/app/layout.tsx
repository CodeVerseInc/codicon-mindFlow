import type { Metadata } from 'next'
import './globals.css'
import { SideBar } from '@/components'
// Provider whith context of session
import { Session } from '@/context/SessionProvider'

export const metadata: Metadata = {
	title: 'Mind Flow',
	description: 'Proyecto para la Codicon',
	icons: {
		icon: '/assets/img/logo.png' // /public path
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body className={`dark:text-white`}>
				<Session>
					<div id='app' className='h-screen relative'>
						{/* A component with conditional logic is used to prevent the entire app from using "use client" */}
						<SideBar />
						<main className='[grid-area:main] md:h-screen mt-[124px] md:mt-0 bg-bg-gray dark:bg-gradient-to-l from-bg-dark via-stone-900 to-bg-dark bg-no-repeat bg-cover '>
							{children}
						</main>
					</div>
				</Session>
			</body>
		</html>
	)
}
