'use client'
import { useMenuData, useQueryParams } from '@/hooks'
import { cn } from '@/lib/utils'
import { ProductsGroupList } from './products-group-list'

interface Props {
	className?: string
}

export const MenuSection: React.FC<Props> = ({ className }) => {
	const { menuId } = useQueryParams()
	const { filteredCategories, categoriesLoading } = useMenuData(menuId)

	if (categoriesLoading) {
		return (
			<div className='bg-white'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductsGroupList key={index} title='' categoryId={0} isLoading />
				))}
			</div>
		)
	}

	return (
		<div className={cn('bg-white', className)}>
			{filteredCategories?.map(category => (
				<ProductsGroupList
					key={category.id}
					title={category.name}
					categoryId={category.id}
					items={category.products}
				/>
			))}
		</div>
	)
}
