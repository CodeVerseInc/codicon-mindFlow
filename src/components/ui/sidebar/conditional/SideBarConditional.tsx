'use client'

import { usePathname } from 'next/navigation' // Add missing import for usePathname
import { SideBar } from '../SideBar'

export const SideBarConditional = () => {
	const pathname = usePathname()
	return pathname === '/' ? <SideBar /> : null // Correct the syntax of the conditional rendering statement
}
