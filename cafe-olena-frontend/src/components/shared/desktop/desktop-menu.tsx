'use client'
import { cn } from '@/lib/utils'
import { IMenu } from '@/types/menu.types'
import React from 'react'
import { ProductsGroupList } from '../products-group-list'

interface Props {
	className?: string
	menu?: IMenu[]
}

export const DesktopMenu: React.FC<Props> = ({ menu, className }) => {
	return (
		<div className={cn('', className)}>
			<ProductsGroupList title='Пиццы' categoryId={2} />
			<ProductsGroupList title='Пиццы' categoryId={2} />
			<ProductsGroupList title='Пиццы' categoryId={2} />
		</div>
	)
}
