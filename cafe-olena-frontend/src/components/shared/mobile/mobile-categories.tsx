'use client'
import { useCategories } from '@/lib/useCategories'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const MobileCategories: React.FC<Props> = ({ className }) => {
	// TODO: проверить структуру
	// TODO: категории только определенного меню
	// TODO: добавить все стили
	const { categories } = useCategories()
	return (
		<div className={cn('bg-white py-2 px-4', className)}>
			{categories?.map(category => (
				<button className='mr-1' key={category.id}>
					{category.name}
				</button>
			))}
		</div>
	)
}
