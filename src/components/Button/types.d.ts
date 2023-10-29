import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'medium' | 'large'
	children: ReactNode
}
