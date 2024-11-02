'use client'
import { useQueryParams } from '@/hooks'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store'
import { IProduct } from '@/types/product.types'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { Skeleton } from '../ui'
import { ProductCard } from './product-card'
import styles from './products-group-list.module.scss'
import { Title } from './title'

interface Props {
	title: string
	items?: IProduct[]
	className?: string
	isLoading?: boolean
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	categoryId,
	isLoading,
	className,
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef<HTMLDivElement>(null)
	const registerCategoryRef = useCategoryStore(
		state => state.registerCategoryRef
	)
	const intersection = useIntersection(intersectionRef, { threshold: 0.4 })
	const { menuId } = useQueryParams()

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection?.isIntersecting, categoryId, menuId])

	useEffect(() => {
		if (intersectionRef.current) {
			registerCategoryRef(categoryId, intersectionRef)
		}
	}, [categoryId, intersectionRef])

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
		<div
			className={cn(styles.productsGroupList, className)}
			ref={intersectionRef}
		>
			<Title className={styles.title} title={title} />
			<div>
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
		</div>
	)
}
