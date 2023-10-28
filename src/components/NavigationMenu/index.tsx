import Link from 'next/link'
import { menuItems } from './constants'
import SearchBar from '../SearchBar'

const NavigationMenu = () => {
	return (
		<nav className='flex items-center justify-center'>
			<div className='hidden sm:flex space-x-16'>
				{menuItems.map((item) => (
					<Link
						className='text-primary 
						uppercase font-light
						 hover:text-zinc-100
						  text-sm md:text-base lg:text-sm xl:text-base'
						key={item.route}
						href={item.route}
					>
						{item.title}
					</Link>
				))}
			</div>

			<hr className='bg-primary h-4 w-px mx-8' />
			<Link
				className='text-primary 
				uppercase font-light
				 hover:text-zinc-100 text-sm md:text-base 
				 lg:text-base xl:text-base'
				href={'/loja'}
			>
				Loja
			</Link>
			<SearchBar />
		</nav>
	)
}

export default NavigationMenu
