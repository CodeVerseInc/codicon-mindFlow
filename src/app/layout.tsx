import type { Metadata } from 'next'
import './globals.css'
import { SideBarConditional } from '@/components'
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
			<body className={`bg-bg-gray h-screen`}>
				<Session>
					{/* A component with conditional logic is used to prevent the entire app from using "use client" */}
					<SideBarConditional />
					{children}
				</Session>
			</body>
		</html>
	)
}
