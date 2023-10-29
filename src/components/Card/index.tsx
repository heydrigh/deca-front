import Image from 'next/image'
import { ICardProps } from './types'
import imageMock from '@/assets/mocks/imageMock.jpg'
import { DateTime } from 'luxon'
import Button from '../Button'

const Card = () => {
	const postedAt = DateTime.now()

	return (
		<div className='bg-white p-5 shadow flex flex-col justify-center'>
			<Image className='mb-8' src={imageMock} alt='image mock' />
			<h2 className='font-bold text-xl mb-8'>
				Cubas Slim — Diversidade De Tamanho, Formato, Aplicação E Cor{' '}
			</h2>
			<p className='text-darkGray mb-2 '>
				Conheça a diversidade de tamanho, formato, aplicação e cor das cubas Slim Deca e confira
				inspirações para os ambientes da sua casa.
			</p>
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
