'use client'
import { cn } from '@/lib/utils'
import { ArrowLeft, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from './container'
import styles from './header.module.scss'
import { InfoButton } from './info-button'
import { SearchInput } from './search-input'
import { Title } from './title'

interface Props {
	className?: string
	hasAdminPage?: boolean
}

export const Header: React.FC<Props> = ({ hasAdminPage, className }) => {
	return (
		<div className={cn(styles.header, className)}>
			<Container className='flex items-center justify-between max-md:bg-gray'>
				<Link className='hidden max-md:block p-4' href='/'>
					<ArrowLeft />
				</Link>
				<Link className='flex items-center p-[14px] max-md:hidden' href='/'>
					<Image src='/logo.png' width='80' height='80' alt='logo' />
					<Title className='ml-4 font-[300]' title='Кафе-Бар' />
					<Title className={styles.olena} title='Олена' />
				</Link>
				{!hasAdminPage && (
					<div className='flex flex-row items-center gap-6 mr-8 p-4'>
						<SearchInput className='flex max-md:hidden' />
						<Search className='hidden max-md:block' />
						<InfoButton />
					</div>
				)}
			</Container>
		</div>
	)
}
