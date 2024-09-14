'use client'
import { cn } from '@/lib/utils'
import { IMenu } from '@/types/menu.types'
import React from 'react'
import { ProductsGroupList } from '../products-group-list'

interface Props {
	className?: string
	menu?: IMenu[]
}

const items = [
	{
		id: 1,
		name: 'Маргарита',
		ingredients: 'Тесто, сыр, помидор, огурец, лук, соль, перец',
		price: '200',
		grams: '200г',
		сategoryId: 2,
	},
	{
		id: 2,
		name: 'Маргарита',
		ingredients: 'Тесто, сыр, помидор, огурец, лук, соль, перец',
		price: '200',
		grams: '200г',
		сategoryId: 2,
	},
	{
		id: 3,
		name: 'Маргарита',
		ingredients: 'Тесто, сыр, помидор, огурец, лук, соль, перец',
		price: '200',
		grams: '200г',
		сategoryId: 2,
	},
]

export const DesktopMenu: React.FC<Props> = ({ menu, className }) => {
	return (
		<div className={cn('', className)}>
			<ProductsGroupList title='Пиццы' categoryId={2} items={items} />
		</div>
	)
}
