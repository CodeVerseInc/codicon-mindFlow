import { Input } from '@/components'

export const FormAddPost = () => {
	return (
		<div>
			<form action=''>
				<Input
					label='Escribe un titulo'
					type='string'
					placeholder='100 dias de NoFap'
					required={true}
					id='title'
				/>
			</form>
		</div>
	)
}
