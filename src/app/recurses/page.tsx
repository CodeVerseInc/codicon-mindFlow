import { IconPlayerPlay } from '@tabler/icons-react'
import Link from 'next/link'

const data = [
	{
		titulo: 'Cómo mejorar tu productividad personal',
		descripcion:
			'En este video, el reconocido autor y coach de productividad comparte consejos prácticos para aumentar tu productividad personal y alcanzar tus metas de manera más eficiente.',
		url: 'https://www.youtube.com/watch?v=9w84G7xIBTk'
	},
	{
		titulo: 'Los 7 hábitos de la gente altamente efectiva',
		descripcion:
			'Basado en el libro superventas de Stephen Covey, este video explora los siete hábitos fundamentales que pueden transformar tu vida personal y profesional para alcanzar el éxito duradero.',
		url: 'https://www.youtube.com/watch?v=dfZ9m-f3CUs'
	},
	{
		titulo: 'Cómo construir una mentalidad de crecimiento',
		descripcion:
			'Descubre cómo desarrollar una mentalidad de crecimiento que te permita superar los desafíos, aprender de los fracasos y alcanzar tu máximo potencial en todas las áreas de tu vida.',
		url: 'https://www.youtube.com/watch?v=hIeTQNHtPZc'
	},
	{
		titulo: 'La importancia del autocuidado en el desarrollo personal',
		descripcion:
			'Este video destaca la necesidad de priorizar el autocuidado en tu jornada diaria para mantener un equilibrio saludable entre el trabajo, la familia y el bienestar personal.',
		url: 'https://www.youtube.com/watch?v=cjkmDOE5pm8https://www.youtube.com/watch?v=cjkmDOE5pm8'
	},
	{
		titulo: 'Cómo superar el miedo al fracaso y tomar acción',
		descripcion:
			'Aprende estrategias efectivas para enfrentar el miedo al fracaso, liberarte de la parálisis del análisis y dar pasos concretos hacia tus metas y sueños más ambiciosos.',
		url: 'https://www.youtube.com/watch?v=tg0UPApCv5M'
	},
	{
		titulo: 'El poder del ahora',
		descripcion:
			'Eckhart Tolle presenta un mensaje simple pero profundo sobre la importancia de vivir en el momento presente. Este libro te ayuda a liberarte del sufrimiento causado por pensamientos negativos sobre el pasado o el futuro, y te guía hacia una mayor conciencia y paz interior.',
		url: 'https://www.amazon.com/dp/1577314808/'
	},
	{
		titulo:
			'La magia del orden: Herramientas para ordenar tu casa... ¡y tu vida!',
		descripcion:
			'Marie Kondo presenta un enfoque revolucionario para ordenar tu hogar y, por extensión, tu vida. A través del método KonMari, aprenderás a deshacerte de objetos que no te traen alegría y a crear un entorno..',
		url: 'https://www.amazon.com/dp/6070723331/'
	},
	{
		titulo: 'El monje que vendió su Ferrari',
		descripcion:
			'En esta novela inspiradora, Robin Sharma narra la historia de un abogado exitoso que, tras un infarto, emprende un viaje espiritual en busca de paz interior y sentido en la vida. A través de las enseñanzas de un sabio monje, descubre las claves para una vida plena y feliz.',
		url: 'https://www.amazon.com/dp/0062515675/'
	},
	{
		titulo: 'Inteligencia emocional',
		descripcion:
			'Daniel Goleman explora el concepto de inteligencia emocional y su impacto en el éxito personal y profesional. Este libro ofrece insights valiosos sobre cómo manejar las emociones, mejorar las relaciones interpersonales y alcanzar el bienestar emocional en la vida cotidiana.',
		url: 'https://www.amazon.com/dp/055380491X/'
	},
	{
		titulo: 'El código del dinero',
		descripcion:
			'Joe Dominguez y Vicki Robin exploran cómo cambiar tu relación con el dinero y alcanzar la libertad financiera. Este libro te enseñará a gestionar tus finanzas de manera efectiva, liberarte de deudas y vivir una vida más plena y significativa.',
		url: 'https://www.amazon.com/dp/0143115766/'
	},
	{
		titulo: 'El camino del artista',
		descripcion:
			'Julia Cameron presenta un enfoque creativo para el desarrollo personal. A través de ejercicios prácticos y técnicas de escritura, te ayudará a superar bloqueos creativos, descubrir tu pasión y vivir una vida más auténtica y satisfactoria.',
		url: 'https://www.amazon.com/dp/0874776945/'
	},
	{
		titulo: 'El camino del guerrero pacífico',
		descripcion:
			'Esta obra, escrita por Dan Millman, es una mezcla de autobiografía y ficción que explora la búsqueda espiritual y el crecimiento personal a través de las en....',
		url: 'https://www.amazon.com/dp/0915811898/'
	}
]

export default function Recurses() {
	return (
		<main className='m-4  flex flex-wrap justify-center gap-4 text-black'>
			{data.map((item) => (
				<article
					className='bg-white w-[190px] h-[260px] md:min-w-[220px] md:min-h-[220px]  p-2 flex flex-col rounded-lg gap-2'
					key={item.titulo}>
					<div className='flex'>
						<div className='w-1/3'>
							<Link href={item.url}>
								<div className='bg-color-bg-circle w-[50px] h-[50px] flex justify-center items-center rounded-full'>
									<IconPlayerPlay
										stroke={2}
										className='text-color-icon-meditation'
									/>
								</div>
							</Link>
						</div>
						<p className='w-2/3 font-semibold text-xs'>{item.titulo}</p>
					</div>
					<div>
						<p className='text-xs'>{item.descripcion}</p>
					</div>
				</article>
			))}
		</main>
	)
}
