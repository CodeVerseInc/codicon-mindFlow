import { Input } from '../forms/Input'

export const FormSignin = () => {
	return (
		<form className='mb-5'>
			<Input
				label='Nombre de usuario'
				type='text'
				id='username'
				placeholder='mike08'
				required={true}
			/>
			<Input
				label='Email'
				type='email'
				id='email'
				placeholder='example@gmail.com'
				required={true}
			/>
			<Input
				label='Contraseña'
				type='password'
				id='password'
				placeholder=''
				required={true}
			/>
			<button
				type='submit'
				className='rounded-lg text-sm h-14  w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5 '>
				Crear cuenta
			</button>
		</form>
	)
}
