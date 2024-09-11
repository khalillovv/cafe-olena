import { cn } from '@/lib/utils'
import React from 'react'
import styles from './information-block.module.scss'
interface Props {
	icon: React.ElementType
	title: string
	text: string
	href: string
	className?: string
}

export const InformationBlock: React.FC<Props> = ({
	icon: IconComponent,
	href,
	title,
	text,
	className,
}) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn(styles.information_block, className)}
		>
			<div className={styles.icon}>
				<IconComponent className='w-6 h-6' />
			</div>
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.text}>{text}</p>
			</div>
		</a>
	)
}
