import React from 'react'

interface Props {
	id: number
	name: string
	ingredients?: string
	price: string
	grams?: string
	categoryId: number
	className?: string
}

export const ProductCard: React.FC<Props> = ({ className }) => {
	return <div className={className}>aaaa</div>
}
