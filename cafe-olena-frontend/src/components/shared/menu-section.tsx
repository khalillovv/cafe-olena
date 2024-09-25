'use client'
import { useCategories } from '@/lib/useCategories'
import { cn } from '@/lib/utils'
import React from 'react'
import { ProductsGroupList } from './products-group-list'

interface Props {
	className?: string
}

export const MenuSection: React.FC<Props> = ({ className }) => {
	const { categories, isLoading } = useCategories()

	const filteredCategories = categories?.filter(
		category => category.menuId === 1
	)

	return (
		<div className={cn('bg-white', className)}>
			{categories
				? filteredCategories?.map(category => (
						<ProductsGroupList
							key={category.id}
							title={category.name}
							categoryId={category.id}
							items={category.products}
							type={category.type}
						/>
				  ))
				: Array.from({ length: 4 }).map((_, index) => (
						<ProductsGroupList key={index} title='' isLoading />
				  ))}
		</div>
	)
}
