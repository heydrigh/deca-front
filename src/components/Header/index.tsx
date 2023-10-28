import Logo from '../Logo'
import NavigationMenu from '../NavigationMenu'

const Header = () => {
	return (
		<header className='sticky top-0 z-50 flex justify-center items-center bg-dex-gray'>
			<div className='w-full max-w-screen-xl mx-auto flex justify-between items-center px-14'>
				<Logo />
				<NavigationMenu />
			</div>
		</header>
	)
}

export default Header
