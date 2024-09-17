import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import styles from './information-block.module.scss'
interface Props {
	icon: React.ElementType
	title?: string
	text: string
	href: string
	hasDrawer?: boolean
	className?: string
}

export const InformationBlock: React.FC<Props> = ({
	icon: IconComponent,
	href,
	title,
	text,
	className,
	hasDrawer,
}) => {
	return (
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn(
				className,
				hasDrawer ? styles.drawer_block : styles.information_block
			)}
		>
			<div className={styles.icon}>
				<IconComponent className='w-6 h-6' />
			</div>
			<div
				className={cn(
					hasDrawer ? styles.drawer_block__info : styles.information_block__info
				)}
			>
				<p
					className={cn(
						hasDrawer
							? styles.drawer_block__title
							: styles.information_block__title
					)}
				>
					{title}
				</p>
				<p
					className={cn(
						hasDrawer
							? styles.drawer_block__text
							: styles.information_block__text
					)}
				>
					{text}
				</p>
			</div>
		</Link>
	)
}
