'use client'
import { cn } from '@/lib/utils'
import { IProduct } from '@/types/product.types'
import React from 'react'
import { Skeleton } from '../ui'
import { ProductCard } from './product-card'
import styles from './products-group-list.module.scss'
import { Title } from './title'

interface Props {
	title: string
	items?: IProduct[]
	className?: string
	type?: string
	isLoading?: boolean
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	type,
	isLoading,
	className,
}) => {
	if (isLoading) {
		return (
			<div className={styles.productsGroupList}>
				<Skeleton className='w-full h-[66px]' />
				{Array.from({ length: 3 }).map((_, index) => (
					<ProductCard key={index} id={0} name='' price='' isLoading />
				))}
			</div>
		)
	}

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
					type={product.gramsType}
				/>
			))}
		</div>
	)
}
