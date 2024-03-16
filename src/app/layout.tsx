import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/index'
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
			<body className={inter.className}>
				<Session>
					{/* <NavBar /> */}
					{children}
				</Session>
			</body>
		</html>
	)
}
