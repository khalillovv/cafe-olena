'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { DesktopCategories } from './desktop-categories'
import styles from './desktop-content.module.scss'
import { DesktopInformation } from './desktop-information'
import { DesktopSearchMenu } from './desktop-search-menu'
interface Props {
	className?: string
}

export const DesktopSearchContent: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.content, className)}>
			<div className={styles.categories}>
				<DesktopCategories hasSearch className='mt-2' />
			</div>
			<div className={styles.menu}>
				<DesktopSearchMenu />
			</div>
			<div className={styles.information}>
				<DesktopInformation className='mt-2' />
			</div>
		</div>
	)
}
