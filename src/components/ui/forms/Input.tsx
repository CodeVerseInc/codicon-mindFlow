'use client'
import { useField, ErrorMessage } from 'formik'

interface InputProps {
	label: string
	placeholder: string
	id: string
	name: string // Agregado el atributo name
	type: string
}

export const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	name,
	...props
}) => {
	const [field, meta] = useField(name)

	return (
		<div className='mb-5'>
			<label
				htmlFor={props.id}
				className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
				{label}
			</label>
			<input
				{...field}
				{...props}
				placeholder={placeholder}
				className='bg-gray-50 border h-14 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
			/>
			{meta.touched && meta.error ? (
				<ErrorMessage
					name={props.id}
					component='span'
					className='block mt-1 text-sm text-red-600'
				/>
			) : null}
		</div>
	)
}
