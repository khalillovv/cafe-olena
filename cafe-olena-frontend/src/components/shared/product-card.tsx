import { cn } from '@/lib/utils'
import { GlassWater, Scale } from 'lucide-react'
import React from 'react'
import styles from './product-card.module.scss'

interface Props {
	id: string
	name: string
	price: string
	ingredients?: string
	grams?: string
	type?: string
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	ingredients,
	grams,
	type,
	className,
}) => {
	return (
		<div className={cn(styles.product_card, className)} key={id}>
			<h2 className={styles.product_card__title}>{name}</h2>
			<p className={styles.product_card__price}>{price} UAH</p>
			<p className={styles.product_card__ingredients}>{ingredients}</p>
			<p className={styles.product_card__grams}>
				{type === 'menu' && <Scale width={16} height={16} />}
				{type === 'bar' && <GlassWater width={16} height={16} />}
				{grams}
			</p>
		</div>
	)
}
