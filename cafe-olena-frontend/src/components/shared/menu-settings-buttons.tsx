'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui'
import { AddCategoryModal, AddMenuModal, AddProductModal } from './modal'

interface Props {
	className?: string
}

export const MenuSettingsButtons: React.FC<Props> = ({ className }) => {
	const [openAddMenuModal, setOpenAddMenuModal] = React.useState(false)
	const [openAddCategoryModal, setOpenAddCategoryModal] = React.useState(false)
	const [openAddProductModal, setOpenAddProductModal] = React.useState(false)
	return (
		<div className={cn('', className)}>
			<div className='flex flex-col gap-3 p-4'>
				<AddMenuModal
					open={openAddMenuModal}
					onClose={() => setOpenAddMenuModal(false)}
				/>
				<Button
					onClick={() => setOpenAddMenuModal(true)}
					className='w-full'
					variant='outline'
				>
					Додати меню
				</Button>
				<AddCategoryModal
					open={openAddCategoryModal}
					onClose={() => setOpenAddCategoryModal(false)}
				/>
				<Button
					onClick={() => setOpenAddCategoryModal(true)}
					className='w-full'
					variant='outline'
				>
					Додати категорії
				</Button>
				<AddProductModal
					open={openAddProductModal}
					onClose={() => setOpenAddProductModal(false)}
				/>
				<Button
					onClick={() => setOpenAddProductModal(true)}
					className='w-full'
					variant='outline'
				>
					Додати позицію
				</Button>
			</div>
		</div>
	)
}
