'use client'
import { Input } from '../forms/Input'
import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

interface Values {
	email: string
	password: string
}

export const FormLogin = () => {
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Ingresa un email válido')
			.required('Ingresa un email'),
		password: yup
			.string()
			.min(8, 'La contraseña debe tener al menos 8 caracteres')
			.required('Ingresa una contraseña')
	})

	const onSubmit = async (
		values: Values,
		{ setSubmitting, setErrors }: FormikHelpers<Values>
	) => {
		try {
			const response = await fetch('http://tu-api-django.com/login/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			if (response.ok) {
				// Inicio de sesión exitoso, podrías redirigir al usuario a otra página
				window.location.href = '/' // Cambia '/dashboard' por la ruta de tu página de inicio de sesión exitoso
			} else {
				// Inicio de sesión fallido, muestra un mensaje de error
				const data = await response.json()
				if (data && data.error) {
					setErrors({ email: data.error }) // Puedes manejar el mensaje de error específico según tu API
				}
			}
		} catch (error) {
			console.error('Error al iniciar sesión:', error)
		}
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formikProps) => (
				<Form className='mb-5'>
					<Input
						type='email'
						name='email'
						label='Email'
						id='email'
						placeholder='example@gmail.com'
					/>
					<Input
						type='password'
						name='password'
						label='Contraseña'
						id='password'
						placeholder=''
					/>
					<button
						type='submit'
						disabled={formikProps.isSubmitting}
						className='rounded-lg text-sm h-14 w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5'>
						Iniciar sesión
					</button>
				</Form>
			)}
		</Formik>
	)
}
