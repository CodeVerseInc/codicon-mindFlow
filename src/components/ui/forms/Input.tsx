interface InputProps {
	label: string
	type: string
	placeholder: string
	required: boolean
	id: string
}

export const Input = ({
	label,
	type,

	placeholder,
	required,
	id
}: InputProps) => {
	return (
		<>
			<div className='mb-5'>
				<label
					htmlFor={type}
					className='block mb-2 text-sm font-medium text-gray-900'>
					{label}
				</label>
				<input
					className='bg-gray-50 border h-14 border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5'
					id={id}
					type={type}
					placeholder={placeholder}
					required={required}
				/>
			</div>
		</>
	)
}
