'use client'
import { Formik, Form, FormikHelpers } from 'formik'
import { Input } from '@/components'
import * as yup from 'yup'

interface Values {
	title: string
}

export const FormAddPost = () => {
	const validationSchema = yup.object({
		title: yup.string().required('Por favor ingresa un titulo')
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
		<div>
			<Formik
				initialValues={{ title: '' }}
				validationSchema={validationSchema} // Aquí pasamos el esquema de validación
				onSubmit={onSubmit}>
				{(formikProps) => (
					<Form>
						<Input
							name='title'
							label='Escribe un título'
							placeholder='100 días de NoFap'
							id='title'
						/>
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
