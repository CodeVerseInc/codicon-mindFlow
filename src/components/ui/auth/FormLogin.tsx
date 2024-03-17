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
			initialValues={{ email: '', password: '' }}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formikProps) => (
				<Form className='mb-5'>
					<Input
						name='email'
						label='Email'
						id='email'
						placeholder='example@gmail.com'
					/>
					<Input
						name='password'
						label='Contraseña'
						id='password'
						placeholder=''
					/>
					<button
						type='submit'
						disabled={formikProps.isSubmitting} // Deshabilitar el botón mientras se está enviando el formulario
						className='rounded-lg text-sm h-14 w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5'>
						Iniciar sesión
					</button>
				</Form>
			)}
		</Formik>
	)
}
