'use client'
import { useQueryParams } from '@/hooks'
import { useProducts } from '@/lib/useProducts'
import { Loader } from 'lucide-react'
import React from 'react'
import { ProductCard } from '../product-card'
import { Title } from '../title'

interface Props {
	className?: string
}

export const DesktopSearchMenu: React.FC<Props> = ({ className }) => {
	const { searchValue } = useQueryParams()
	const { products, isLoading } = useProducts(searchValue || undefined)

	return (
		<div className={className}>
			{isLoading ? (
				<div className='flex justify-center items-center mt-64'>
					<Loader className='animate-spin' />
				</div>
			) : searchValue ? (
				products && products.length > 0 ? (
					<div className='border-2 border-border rounded-[20px] mb-[14px]'>
						<Title
							className='bg-gray p-4 text-center rounded-t-[16px] border-b-2 border-border'
							title='Результати пошуку:'
						/>
						{products?.map(product => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								price={product.price}
								ingredients={product.ingredients}
								grams={product.grams}
							/>
						))}
					</div>
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
	)
}
