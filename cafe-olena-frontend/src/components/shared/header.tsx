import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
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
			<Link href='/'>
				<Container className='flex items-center p-[14px]'>
					<Image src='/logo.png' width='80' height='80' alt='logo' />
					<Title className='ml-4 font-[300]' title='Кафе-Бар' />
					<Title
						className='text-background ml-[4px] font-[500]'
						title='Олена'
					/>
				</Container>
			</Link>
		</div>
	)
}
