// TODO: нужен ли этот компонент
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	name: string
	className?: string
}

export const MobileCategoriesItem: React.FC<Props> = ({ name, className }) => {
	return (
		<button
			className={cn(
				'text-[12px] leading-3.5 font-semibold uppercase border border-border rounded-sm min-h-10 px-3 mr-1',
				className
			)}
		>
			{name}
		</button>
	)
}
