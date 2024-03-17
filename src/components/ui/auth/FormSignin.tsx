'use client'

import { Formik, Form, FormikHelpers } from 'formik'
import { Input } from '../forms/Input'
import * as yup from 'yup'

interface Values {
	username: string
	email: string
	password: string
}

export const FormSignin = () => {
	const validationSchema = yup.object({
		username: yup.string().required('Ingresa un nombre de usuario'),
		email: yup
			.string()
			.email('Ingresa un email válido')
			.required('Ingresa un email'),
		password: yup
			.string()
			.min(8, 'La contraseña debe tener al menos 8 caracteres')
			.required('Ingresa una contraseña')
	})

	const onSubmit = (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		console.log(values)
		alert(JSON.stringify(values, null, 2))
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={{ username: '', email: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formikProps) => (
				<Form className='mb-5'>
					<Input
						label='Nombre de usuario'
						name='username'
						id='username'
						placeholder='mike08'
					/>
					<Input
						name='email'
						label='Email'
						id='email'
						placeholder='example@gmail.com'
					/>
					<Input
						label='Contraseña'
						name='password'
						id='password'
						placeholder=''
					/>
					<button
						type='submit'
						disabled={formikProps.isSubmitting}
						className='rounded-lg text-sm h-14 w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5'>
						Crear cuenta
					</button>
				</Form>
			)}
		</Formik>
	)
}
