'use client'
import { useMenu } from '@/lib/useMenu'
import { cn } from '@/lib/utils'
import React from 'react'
import { DesktopCategories } from './desktop-categories'
import styles from './desktop-content.module.scss'
import { DesktopInformation } from './desktop-information'
import { DesktopMenu } from './desktop-menu'
interface Props {
	className?: string
}

export const DesktopContent: React.FC<Props> = ({ className }) => {
	const { menu } = useMenu()
	return (
		<div className={cn(styles.content, className)}>
			<div className={styles.categories}>
				<DesktopCategories menu={menu} className='mt-2' />
			</div>
			<div className={styles.menu}>
				<DesktopMenu menu={menu} />
			</div>
			<div className={styles.information}>
				<DesktopInformation className='mt-2' />
			</div>
		</div>
	)
}
