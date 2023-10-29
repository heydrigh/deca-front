import Link from 'next/link'
import { partnersLinks } from './constants'
import Image from 'next/image'

const PartnersNavigation = () => {
	return (
		<ul className='flex flex-col items-center md:flex-row space-y-9 md:space-x-6 md:space-y-0 mt-9'>
			{partnersLinks.map((link) => (
				<li key={link.href}>
					<Link href={link.href}>
						<Image height={20} src={link.image} alt={link.alt} />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default PartnersNavigation
