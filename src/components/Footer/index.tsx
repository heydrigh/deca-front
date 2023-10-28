import Link from 'next/link'
import SocialNavigation from '../SocialNavigation'
import { decaURL } from './constants'
import Image from 'next/image'
import dexcoLogo from '@/assets/images/logo-dexco-hw.svg'
import PartnersNavigation from '../PartnersNavigation'

const Footer = () => {
	return (
		<footer
			className='w-full
	 	 flex flex-col  
	  bg-dex-gray
		 justify-center 
		 items-center
		 pt-12 pb-8'
		>
			<SocialNavigation />
			<Link className='mt-12' passHref href={decaURL} target='_blank' rel='noreferrer noopener'>
				<Image height={30} src={dexcoLogo} alt='Dexco' />
			</Link>
			<PartnersNavigation />

			<div className='flex mt-5'>
				<Link className='text-zinc-100 hover:text-primary' href='#'>
					Politíca de Privacidade
				</Link>

				<span className='text-darkGray font-thin text-sm mx-2'>|</span>

				<Link className='text-zinc-100 hover:text-primary' href='#'>
					Preferências de Cookie
				</Link>
			</div>
		</footer>
	)
}

export default Footer
