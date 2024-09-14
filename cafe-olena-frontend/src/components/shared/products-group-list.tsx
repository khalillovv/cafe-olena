import { cn } from '@/lib/utils'
import React from 'react'
import styles from './products-group-list.module.scss'
import { Title } from './title'

interface Props {
	title: string
	items?: any
	className?: string
	categoryId: number
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

export const ProductsGroupList: React.FC<Props> = ({
	title,
	// items,
	className,
}) => {
	return (
		<div className={cn(styles.productsGroupList, className)}>
			<Title className={styles.title} title={title} />
			{items &&
				items.map(item => (
					<div className={styles.product_block} key={item.id}>
						<h2 className={styles.product_block__title}>{item.name}</h2>
						<p className={styles.product_block__price}>{item.price} UAH</p>
						<p className={styles.product_block__ingredients}>
							{item.ingredients}
						</p>
						<p className={styles.product_block__grams}>{item.grams}</p>
					</div>
				))}
		</div>
	)
}
