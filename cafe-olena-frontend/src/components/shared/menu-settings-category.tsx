'use client'
import { useMenuData } from '@/hooks'
import { ICategory } from '@/types/category.types'
import { SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { DeleteButton } from './delete-button'
import { EditCategoryModal } from './modal'

interface Props {
	className?: string
}

export const MenuSettingsCategory: React.FC<Props> = ({ className }) => {
	const { menu, categories, deleteCategories } = useMenuData()
	const [isEditModalOpen, setEditModalOpen] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
		null
	)

	const handleEditClick = (category: ICategory) => {
		setSelectedCategory(category)
		setEditModalOpen(true)
	}

	return (
		<div className={className}>
			<p className='mb-2 text-3xl'>Категорії</p>
			{categories?.map(category => {
				const menuName = menu?.find(item => item.id === category.menuId)?.name

				return (
					<p className='flex flex-row items-center mb-1' key={category.id}>
						<SquarePen
							className='mr-2 cursor-pointer transition-colors hover:text-primary'
							onClick={() => handleEditClick(category)}
						/>
						{category.name} ({menuName})
						<DeleteButton
							name={`Ви дійсно хочете видалити категорію "${category.name}"?`}
							onConfirm={() => deleteCategories(category.id)}
							className='ml-2'
						/>
					</p>
				)
			})}
			{isEditModalOpen && selectedCategory && (
				<EditCategoryModal
					open={isEditModalOpen}
					onClose={() => setEditModalOpen(false)}
					initialData={selectedCategory}
				/>
			)}
		</div>
	)
}
