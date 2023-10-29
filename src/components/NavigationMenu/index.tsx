import Link from 'next/link'
import { menuItems } from './constants'
import { GiHamburgerMenu } from 'react-icons/gi'
import SearchBar from '../SearchBar'

const NavigationMenu = () => {
	return (
		<nav className='flex items-center justify-center'>
			<div className='hidden md:flex space-x-2 lg:space-x-12'>
				{menuItems.map((item) => (
					<Link
						className='text-primary 
						uppercase font-light
						 hover:text-zinc-100
						  text-sm lg:text-base '
						key={item.route}
						href={item.route}
					>
						{item.title}
					</Link>
				))}
			</div>

			<hr className='bg-primary h-4 w-px mx-1 lg:mx-8 hidden md:flex' />
			<Link
				className='text-primary 
				uppercase font-light
				 hover:text-zinc-100 text-sm lg:text-base
				 hidden md:flex'
				href={'/loja'}
			>
				Loja
			</Link>
			<SearchBar />
			<button className='md:hidden'>
				<GiHamburgerMenu size={22} className='text-primary' />
			</button>
		</nav>
	)
}

export default NavigationMenu
