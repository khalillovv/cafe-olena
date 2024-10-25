'use client'
import { useMenuData } from '@/hooks'
import { useDeleteCategories } from '@/hooks/useCategories'
import { useDeleteMenu } from '@/hooks/useMenu'
import { useDeleteProduct } from '@/hooks/useProduct'
import { useProducts } from '@/lib/useProducts'
import { cn } from '@/lib/utils'
import React from 'react'
import { DeleteButton } from './delete-button'
import { ProductCard } from './product-card'

interface Props {
	className?: string
}

export const MenuSettingsSection: React.FC<Props> = ({ className }) => {
	const { menu, categories } = useMenuData()
	const { products } = useProducts()
	const { deleteMenu } = useDeleteMenu()
	const { deleteCategories } = useDeleteCategories()
	const { deleteProduct } = useDeleteProduct()
	return (
		<div className='md:ml-[400px] p-5 w-full'>
			<div className={cn('flex flex-col md:flex-row justify-between ')}>
				<div>
					<p className='mb-2 text-3xl'>Меню</p>
					{menu?.map(item => (
						<p key={item.id} className='flex flex-row items-center mb-1'>
							{item.name}
							<DeleteButton
								name={`Ви дійсно хочете видалити "${item.name}"`}
								onConfirm={() => deleteMenu(item.id)}
								className='ml-2'
							/>
						</p>
					))}
				</div>
				<div>
					<p className='mb-2 text-3xl'>Категорії</p>
					{categories?.map(category => (
						<p className='flex flex-row items-center mb-1' key={category.id}>
							[ {category.id} ] {category.name}
							<DeleteButton
								name={`Ви дійсно хочете видалити категорію "${category.name}"?`}
								onConfirm={() => deleteCategories(category.id)}
								className='ml-2'
							/>
						</p>
					))}
				</div>
				<br className='hidden md:block' />
			</div>
			<div className='md:max-w-[600px]'>
				<p className='mb-2 text-3xl'>Позиції</p>
				{products?.map(product => (
					<p className='flex flex-row justify-between border' key={product.id}>
						<ProductCard
							className='max-w-[300px] md:max-w-[500px]'
							id={product.id}
							name={product.name}
							price={product.price}
							ingredients={product.ingredients}
							grams={product.grams}
							type={product.gramsType}
						/>
						<DeleteButton
							name={`Ви дійсно хочете видалити позицію "${product.name}"?`}
							onConfirm={() => deleteProduct(product.id)}
							className='items-end mr-2 mt-2'
						/>
					</p>
				))}
			</div>
		</div>
	)
}
