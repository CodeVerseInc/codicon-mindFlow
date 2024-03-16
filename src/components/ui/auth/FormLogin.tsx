export const FormLogin = () => {
	return (
		<form className='mb-5'>
			<div className='mb-5'>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900 '>
					Email o nombre de usuario
				</label>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-14 w-full p-2.5'
					placeholder='example@gmail.com'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='password'
					className='block mb-2 text-sm font-medium text-gray-900'>
					Contraseña
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border h-14 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
					required
				/>
			</div>
			<div className='flex items-start mb-5'>
				<div className='flex items-center h-5'>
					<input
						id='remember'
						type='checkbox'
						defaultValue=''
						className='w-4 border border-gray-300 rounded'
						required
					/>
				</div>
				<label
					htmlFor='remember'
					className='ms-2 text-sm font-medium text-gray-900'>
					Recordarme
				</label>
			</div>
			<button
				type='submit'
				className='rounded-lg text-sm h-14  w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5 '>
				Iniciar sesion
			</button>
		</form>
	)
}
