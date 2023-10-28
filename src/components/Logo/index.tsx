import Image from 'next/image'
import logo from '@/assets/images/logo-deca.svg'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='#'>
			<Image height={70} width={68} src={logo} alt='Deca logo' />
		</Link>
	)
}

export default Logo
