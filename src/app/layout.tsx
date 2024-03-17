import type { Metadata } from 'next'
import './globals.css'
import { SideBar, DarkModeToggle } from '@/components'
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
			<body
				className={`bg-bg-gray h-screen dark:bg-gradient-to-b from-stone-600 to-zinc-900`}>
				<Session>
					<div id='app' className='h-screen relative'>
						<DarkModeToggle />
						{/* A component with conditional logic is used to prevent the entire app from using "use client" */}
						<SideBar />
						<main className='[grid-area:main] h-screen mt-32 md:mt-0'>
							{children}
						</main>
					</div>
				</Session>
			</body>
		</html>
	)
}
