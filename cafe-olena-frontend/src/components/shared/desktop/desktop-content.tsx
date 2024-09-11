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
			<DesktopCategories />
			<DesktopMenu />
			<DesktopInformation />
		</div>
	)
}
