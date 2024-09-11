import { cn } from '@/lib/utils'
import React from 'react'
import { Container } from './container'
import styles from './header.module.scss'
import { Title } from './title'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.header, className)}>
			<Container>
				<Title className='ml-4' title='Кафе Олена' />
			</Container>
		</div>
	)
}
