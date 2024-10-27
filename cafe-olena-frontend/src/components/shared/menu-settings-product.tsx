'use client'
import { useMenuData } from '@/hooks'
import { cn } from '@/lib/utils'
import { IProduct } from '@/types/product.types'
import { SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { DeleteButton } from './delete-button'
import { EditProductModal } from './modal'
import { ProductCard } from './product-card'

interface Props {
	className?: string
}

export const MenuSettingsProduct: React.FC<Props> = ({ className }) => {
	const { products, deleteProduct } = useMenuData()
	const [isEditModalOpen, setEditModalOpen] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

	const handleEditClick = (product: IProduct) => {
		setSelectedProduct(product)
		setEditModalOpen(true)
	}
	return (
		<div className={cn('md:max-w-[600px]', className)}>
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
					<div className='flex flex-row gap-2 mt-2 mr-2'>
						<SquarePen
							className='cursor-pointer transition-colors hover:text-primary'
							onClick={() => handleEditClick(product)}
						/>
						<DeleteButton
							name={`Ви дійсно хочете видалити позицію "${product.name}"?`}
							onConfirm={() => deleteProduct(product.id)}
						/>
					</div>
				</p>
			))}
			{isEditModalOpen && selectedProduct && (
				<EditProductModal
					open={isEditModalOpen}
					onClose={() => setEditModalOpen(false)}
					initialData={selectedProduct}
				/>
			)}
		</div>
	)
}
