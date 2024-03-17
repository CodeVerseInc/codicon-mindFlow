'use client'
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from 'formik'
import { Input } from '@/components'
import * as yup from 'yup'

interface Values {
	title: string
}

export const FormAddPost = () => {
	const validationSchema = yup.object({
		title: yup.string().required('Por favor ingresa un titulo'),
		description: yup
			.string()
			.min(20, 'La descripción debe tener al menos 20 caracteres')
			.max(255, 'Maximo 250 caracteres')
			.required('Por favor ingresa una descripción')
	})

	const onSubmit = async (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		try {
			const response = await fetch('http://tu-backend-django.com/api/posts/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			if (response.ok) {
				alert('Publicación exitosa') // O maneja el resultado de la publicación de alguna otra manera
			} else {
				const data = await response.json()
				alert(data.error || 'Error al publicar') // Muestra un mensaje de error si hay problemas en el servidor
			}
		} catch (error) {
			console.error('Error al publicar:', error)
			alert('Error al publicar') // Muestra un mensaje de error genérico en caso de errores de red u otros problemas
		}

		setSubmitting(false)
	}

	return (
		<div>
			<Formik
				initialValues={{ title: '' }}
				validationSchema={validationSchema} // Aquí pasamos el esquema de validación
				onSubmit={onSubmit}>
				{(formikProps) => (
					<Form className='flex flex-col justify-between '>
						<Input
							type='text'
							name='title'
							label='Escribe un título'
							placeholder='100 días de NoFap'
							id='title'
						/>
						<div>
							<label htmlFor='description'>Descripción:</label>
							<Field
								as='textarea'
								name='description'
								id='description'
								className='resize-none w-full focus-none border rounded-lg p-2.5 border-gray-300 bg-gray-50 text-gray-900 text-sm mt-2.5'
								style={{ height: '80px' }}
							/>
							<ErrorMessage
								name='description'
								component='span'
								className='block mt-1 text-sm text-red-600'
							/>
						</div>
						<button
							type='submit'
							disabled={formikProps.isSubmitting}
							className='rounded-lg text-sm h-14 w-full bg-gradient-to-b from-tom-thumb-700 to-tom-thumb-800 text-white px-5 py-2.5'>
							Publicar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
