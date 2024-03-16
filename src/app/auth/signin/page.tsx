'use client'
import { LoginSignInGoogle, FormSignin } from '@/components'
import { IconCornerUpLeft } from '@tabler/icons-react'
import Link from 'next/link'

function SignIn() {
	return (
		<section className='flex justify-center items-center [grid-area:main] mt-8'>
			<div className='bg-white p-10 flex flex-col-reverse  md:flex-row md:justify-between md:w-[1200px] rounded-lg '>
				<article className='rounded-lg w-full md:w-[480px] '>
					<picture>
						<img
							src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562810/mindflow-logo.webp'
							alt='Logo App MindFlow'
							width={120}
							height={120}
						/>
					</picture>

					<div className='flex items-center gap-x-5'>
						<h2 className='text-3xl'>Registrarse</h2>{' '}
						<Link href='/'>
							<IconCornerUpLeft stroke={2} className='block' />
						</Link>
					</div>

					{/* Form for login our db */}
					<FormSignin />
					{/* Login with Google */}
					<LoginSignInGoogle>Iniciar sesion con Google</LoginSignInGoogle>
					<div className='text-center mt-10'>
						<Link href='login'>
							Ya tienes cuenta?{' '}
							<span className='text-tom-thumb-950 font-semibold '>
								Iniciar sesión
							</span>
						</Link>
					</div>
				</article>

				<article>
					<picture className='text-center'>
						<img
							src='https://res.cloudinary.com/dlklqucye/image/upload/v1710562891/img-login.webp'
							alt='Imagen inicio sesion'
							className='rounded-lg '
							width={610}
							height={540}
						/>
					</picture>
				</article>
			</div>
		</section>
	)
}

export default SignIn
