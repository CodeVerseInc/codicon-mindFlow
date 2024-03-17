import { CardBookBetter, CardRecurses } from '@/components'
import { IconCornerDownRight } from '@tabler/icons-react'
import Link from 'next/link'

const personalDevelopmentResources = [
	{
		id: 1,
		title: 'Desarrollo Personal: Mejora tu Autoestima',
		link: 'https://www.youtube.com/@ELTEMACH'
	},
	{
		id: 2,
		title: 'Desarrollo Personal: Gestión del Tiempo',
		link: 'https://www.youtube.com/@ELTEMACH'
	},
	{
		id: 3,
		title: 'Desarrollo Personal: Habilidades de Comunicación',
		link: 'https://www.youtube.com/@ELTEMACH'
	}
]

const books = [
	{
		title: 'El club de la 5 am',
		image:
			'https://res.cloudinary.com/dlklqucye/image/upload/v1710685121/unnamed_bfzvkc.webp',
		description:
			'El Club de las 5 de la mañana: Controla tus mañanas, impulsa tu vida / The 5 AM Club: Own Your Morning. Elevate Your Life. (Spanish Edition). ¡Oferta!'
	},
	{
		title: 'Deja de pensar demasiado',
		image:
			'https://res.cloudinary.com/dlklqucye/image/upload/v1710685679/image_2_fcunvl.webp',
		description:
			'23 técnicas para aliviar el estrés, detener las espirales negativas, despejar la mente y concentrarse en el presente'
	}
]

export default function Home() {
	return (
		<section className='flex justify-between flex-col md:flex-row'>
			<article className='w-full h-screen'>
				<p>aqui el timer</p>
				<article>aqui los post</article>
			</article>
			<article className='bg-white dark:bg-bg-dark w-full md:w-[750px] h-screen p-5'>
				<div className='flex justify-between items-center'>
					<h2 className=' text-xl font-bold'>Aqui los libros mas destacados</h2>
					<Link
						href='library'
						className='text-xs font-extralight flex items-center'>
						Ver todos
						<IconCornerDownRight stroke={2} />
					</Link>
				</div>
				<div>
					{books.map((book, index) => (
						<CardBookBetter
							key={index}
							title={book.title}
							image={book.image}
							description={book.description}
						/>
					))}
				</div>

				<div className='flex justify-between items-center'>
					<h2 className='text-xl font-bold'>Recursos destacados</h2>
					<Link
						href='recurses'
						className='text-xs font-extralight flex items-center'>
						Ver todos
						<IconCornerDownRight stroke={2} />
					</Link>
				</div>

				<div className='flex gap-5 flex-col'>
					{personalDevelopmentResources.map((resource) => (
						<CardRecurses
							key={resource.id}
							title={resource.title}
							link={resource.link}
						/>
					))}
				</div>
			</article>
		</section>
	)
}
