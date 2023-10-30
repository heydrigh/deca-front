'use client'
import React, { ChangeEvent, useState } from 'react'
import Hamburger from 'hamburger-react'
import { menuItems } from './constants'
import Link from 'next/link'
import { GoChevronRight } from 'react-icons/go'
import Input from '../Input'

const Drawer = () => {
	const [isOpen, setOpen] = useState(false)
	const [search, setSearch] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleInputSearch = () => {
		if (!search) return
		console.log(search)
	}

	const drawerClasses = `md:hidden bg-dex-gray fixed top-[70px] left-0 w-full h-screen shadow-lg 
	px-4 pt-4
	transform transition-transform ease-in-out duration-300 ${
		isOpen ? 'translate-y-0 ' : '-translate-y-full hidden'
	}`

	const hamburgerClasses = 'z-10'

	return (
		<div className='md:hidden mt'>
			<div className={hamburgerClasses}>
				<Hamburger direction='right' size={20} color='#DBC79A' toggled={isOpen} toggle={setOpen} />
			</div>
			<div className={drawerClasses}>
				<Input onChange={handleChange} onMagnifierClick={handleInputSearch} />
				<div className='pt-8  flex flex-col space-y-9'>
					{menuItems.map((item) => (
						<Link
							className='text-primary 
							uppercase 
							flex
							items-center
						  text-lg font-thin'
							key={item.route}
							href={item.route}
						>
							{item.title}
							<GoChevronRight className='ml-1' size={16} color='#DBC79A' />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Drawer
