import { cn } from '@/lib/utils'
import { IProduct } from '@/types/product.types'
import React from 'react'
import { ProductCard } from './product-card'
import styles from './products-group-list.module.scss'
import { Title } from './title'

interface Props {
	title: string
	items?: IProduct[]
	className?: string
	type?: string
	categoryId?: string
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	type,
	className,
}) => {
	return (
		<div className={cn(styles.productsGroupList, className)}>
			<Title className={styles.title} title={title} />
			{items?.map(product => (
				<ProductCard
					key={product.id}
					id={product.id}
					name={product.name}
					price={product.price}
					ingredients={product.ingredients}
					grams={product.grams}
					type={type}
				/>
			))}
		</div>
	)
}
