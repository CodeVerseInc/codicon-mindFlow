'use client'
import { signIn, useSession } from 'next-auth/react'
//Solo es de prueba
import Link from 'next/link'

export const NavBar = () => {
	const { data: session } = useSession()
	console.log(session)

	return (
		<div>
			<Link href='/dashboard' className='bg-black p-5 text-white'>
				Panel
			</Link>
			{/* <p>{session?.user?.name}</p>
			<img src={session?.user?.image} />
			<p>{session?.user?.email}</p> */}

			<button onClick={() => signIn()}>signIn</button>
		</div>
	)
}
