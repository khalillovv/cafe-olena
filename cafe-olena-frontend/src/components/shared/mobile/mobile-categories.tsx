'use client'
import { Skeleton } from '@/components/ui'
import { useCategories } from '@/lib/useCategories'
import { cn } from '@/lib/utils'
import React from 'react'
import { Slider } from '../slider'

interface Props {
	className?: string
}

export const MobileCategories: React.FC<Props> = ({ className }) => {
	// TODO: проверить структуру
	const { categories } = useCategories()

	const filteredCategories = categories?.filter(
		category => category.menuId === 1
	)
	return (
		<div className={cn('bg-white py-2 px-4', className)}>
			<Slider>
				{filteredCategories
					? filteredCategories.map(category => (
							<button
								key={category.id}
								className='text-[12px] leading-3.5 font-semibold uppercase border border-border rounded-sm min-h-10 px-3 mr-1'
							>
								{category.name}
							</button>
					  ))
					: Array.from({ length: 4 }).map((_, index) => (
							<Skeleton key={index} className='w-[100px] h-8 mr-1' />
					  ))}
			</Slider>
		</div>
	)
}
