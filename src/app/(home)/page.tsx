import { CardBookBetter, CardRecurses } from '@/components'
import { Timer } from '@/components/timer'
import { IconCornerDownRight } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'

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

const posts = [
	{
		username: 'Angel Cruz',
		description: 'Desarrollador FrontEnd',
		profilePicture: 'https://avatars.githubusercontent.com/u/136207924?v=4'
	},
	{
		username: 'Ariff Martinez',
		description: 'Desarrollador FrontEnd.',
		profilePicture: 'https://avatars.githubusercontent.com/u/141645615?v=4'
	},
	{
		username: 'Lizandro',
		description: 'Desarrollador Backend.',
		profilePicture: 'https://avatars.githubusercontent.com/u/139398896?v=4'
	}
]

export default function Home() {
	return (
		<section className='flex justify-between flex-col md:flex-row'>
			<article className='w-full '>
				<Timer />
				<article className='p-5'>
					<h4 className='text-xl font-bold'>Ultimos post</h4>

					<div className='flex flex-col md:flex-row mt-5 justify-center items-center gap-x-5'>
						{posts.map((post) => (
							<div
								key={post.username}
								className='` bg-color-bg-circle   dark:bg-bg-card-dark mb-3 dark:bg-opacity-30 p-2 rounded-lg flex flex-col items-center justify-center'>
								<div className='flex gap-x-5 flex-col items-center mt-5 '>
									<Image
										src={post.profilePicture}
										width={50}
										height={50}
										className='rounded-full'
										alt={post.username}
									/>
									<p className='font-bold text-xl'>{post.username}</p>
								</div>
								<div>
									<p>{post.description}</p>
								</div>
							</div>
						))}
					</div>
				</article>
			</article>
			<article className='bg-white dark:bg-bg-dark w-full md:w-[750px] h-screen p-5'>
				<div className='flex justify-between items-center'>
					<h2 className=' text-xl font-bold text-tom-thumb-500'>
						Aqui los libros mas destacados
					</h2>
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
					<h2 className='text-xl font-bold text-tom-thumb-500'>
						Recursos destacados
					</h2>
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
