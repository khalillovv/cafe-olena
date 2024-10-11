import { cn } from '@/lib/utils'
import { GlassWater, Scale } from 'lucide-react'
import React from 'react'
import { Skeleton } from '../ui'
import styles from './product-card.module.scss'

interface Props {
	id: number
	name: string
	price: string
	ingredients?: string
	grams?: string
	type?: string
	isLoading?: boolean
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	ingredients,
	grams,
	type,
	isLoading,
	className,
}) => {
	return (
		<div className={cn(styles.product_card, className)} key={id}>
			<h2 className={styles.product_card__title}>
				{isLoading ? <Skeleton className='w-28 h-6' /> : name}
			</h2>
			<div className={styles.product_card__price}>
				{isLoading ? <Skeleton className='w-16 h-6' /> : `${price} UAH`}
			</div>
			<div className={styles.product_card__ingredients}>
				{isLoading ? <Skeleton className='w-72 h-6' /> : ingredients}
			</div>
			<div className={styles.product_card__grams}>
				{isLoading ? (
					<Skeleton className='w-12 h-4' />
				) : (
					<>
						{type === 'gram' && <Scale width={16} height={16} />}
						{type === 'liter' && <GlassWater width={16} height={16} />}
						{grams}
					</>
				)}
			</div>
		</div>
	)
}
