import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	title: string
	className?: string
}

export const Title: React.FC<Props> = ({ className, title }) => {
	return (
		<div className={cn('text-[24px] leading-[32px] font-extrabold', className)}>
			{title}
		</div>
	)
}
