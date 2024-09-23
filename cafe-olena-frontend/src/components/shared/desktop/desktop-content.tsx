'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { MenuSection } from '../menu-section'
import { DesktopCategories } from './desktop-categories'
import styles from './desktop-content.module.scss'
import { DesktopInformation } from './desktop-information'
interface Props {
	className?: string
}

export const DesktopContent: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(styles.content, className)}>
			<div className={styles.categories}>
				<DesktopCategories className='mt-2' />
			</div>
			<div className={styles.menu}>
				<MenuSection />
			</div>
			<div className={styles.information}>
				<DesktopInformation className='mt-2' />
			</div>
		</div>
	)
}
