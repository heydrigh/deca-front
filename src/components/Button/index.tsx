import { IButtonProps } from './types'

const Button = ({ children, size = 'medium', ...rest }: IButtonProps) => {
	const buttonSizeClass = size === 'medium' ? 'py-1' : 'py-3'

	return (
		<button
			className={`bg-primary uppercase hover:bg-hover
    transition duration-300 ease-in-out px-6 ${buttonSizeClass}`}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
