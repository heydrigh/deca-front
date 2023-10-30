import { PiMagnifyingGlass } from 'react-icons/pi'
import { IInputProps } from './types'

const Input = ({ onMagnifierClick, ...rest }: IInputProps) => {
	return (
		<div className='relative bg-inputGray w-full p-2'>
			<input
				{...rest}
				placeholder='Digite aqui o que você procura'
				className='text-primary bg-inputGray w-full placeholder:text-placeholder focus:outline-none'
			/>
			<button onClick={onMagnifierClick}>
				<PiMagnifyingGlass
					size={20}
					color='#DBC79A'
					className='text-primary absolute right-2 top-[10px]'
				/>
			</button>
		</div>
	)
}

export default Input
