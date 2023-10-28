import Link from 'next/link'
import { socialMediaLinks } from './constants'

const SocialNavigation = () => {
	return (
		<ul className='flex space-x-4'>
			{socialMediaLinks.map((link) => (
				<li key={link.href}>
					<Link passHref href={link.href} target='_blank' rel='noreferrer noopener'>
						<link.Icon size={20} alt={link.alt} className='text-zinc-100 hover:text-primary' />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default SocialNavigation
