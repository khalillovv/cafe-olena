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
	return (
		<div className={cn(styles.content, className)}>
			<div className={styles.categories}>
				<DesktopCategories />
			</div>
			<div className={styles.menu}>
				<DesktopMenu />
			</div>
			<div className={styles.information}>
				<DesktopInformation />
			</div>
		</div>
	)
}
