'use client'
import { useQueryParams } from '@/hooks'
import { useProducts } from '@/lib/useProducts'
import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'
import React from 'react'
import { ProductCard } from '../product-card'
import { SearchInput } from '../search-input'

interface Props {
	className?: string
}

export const MobileSearchContent: React.FC<Props> = ({ className }) => {
	const { searchValue } = useQueryParams()
	const { products, isLoading } = useProducts(searchValue || undefined)

	return (
		<div className={cn('bg-gray h-[100vh]', className)}>
			<div className='p-3'>
				<SearchInput />
				{isLoading ? (
					<div className='flex justify-center items-center mt-64'>
						<Loader className='animate-spin' />
					</div>
				) : searchValue ? (
					products && products.length > 0 ? (
						products.map(product => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								price={product.price}
								grams={product.grams}
								ingredients={product.ingredients}
							/>
						))
					) : (
						<div className='text-center mt-10'>
							<p className='font-bold'>
								За запитом{' '}
								<span className='text-grayDark italic'>{searchValue}</span>{' '}
								результатів не знайдено.
							</p>
						</div>
					)
				) : null}
			</div>
		</div>
	)
}
