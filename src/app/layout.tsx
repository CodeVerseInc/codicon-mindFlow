import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SideBarConditional } from '@/components'
// Provider whith context of session
import { Session } from '@/context/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={`${inter.className} bg-bg-gray h-screen`}>
				{/* A component with conditional logic is used to prevent the entire app from using "use client" */}
				<SideBarConditional />
				<Session>{children}</Session>
			</body>
		</html>
	)
}
