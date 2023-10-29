import Image from 'next/image'
import { ICardProps } from './types'
import imageMock from '@/assets/mocks/imageMock.jpg'

import Button from '../Button'

const Card = ({ postedAt, summary, thumbnail, thumbnailAlt, title }: ICardProps) => {
	return (
		<div className='bg-white p-5 shadow flex flex-col justify-center'>
			<div className='relative  w-full h-96 md:h-72'>
				<Image fill className='mb-8 h-4 w-4' src={thumbnail} alt={thumbnailAlt} />
			</div>

			<h2 className='font-bold text-xl mb-8'>{title}</h2>
			<p className='text-darkGray mb-2 line-clamp-6'>{summary}</p>
			<div className='pt-3 border-t border-gray-300'>
				<p className='text-darkGray mb-3'>postado em {postedAt.toFormat('dd/mm/yyyy')}</p>

				<div className='flex items-center justify-center'>
					<Button>Veja Mais</Button>
				</div>
			</div>
		</div>
	)
}

export default Card
