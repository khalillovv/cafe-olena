'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Container } from './container'
import styles from './header.module.scss'
import { InfoButton } from './info-button'
import { SearchInput } from './search-input'
import { Title } from './title'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const pathname = usePathname()

	const isAdminPage = pathname === DASHBOARD_PAGES.ADMIN
	return (
		<div className={cn(styles.header, className)}>
			<Container className='flex items-center justify-between'>
				<Link className='flex items-center p-[14px]' href='/'>
					<Image src='/logo.png' width='80' height='80' alt='logo' />
					<Title className='ml-4 font-[300]' title='Кафе-Бар' />
					<Title className={styles.olena} title='Олена' />
				</Link>
				{!isAdminPage && (
					<div className='flex flex-row items-center gap-6 mr-8'>
						<SearchInput />
						<InfoButton />
					</div>
				)}
			</Container>
		</div>
	)
}
