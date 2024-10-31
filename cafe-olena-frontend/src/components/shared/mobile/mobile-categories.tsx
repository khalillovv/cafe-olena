'use client'
import { Skeleton } from '@/components/ui'
import { useMenuData, useQueryParams } from '@/hooks'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store'
import { Slider } from '../slider'

interface Props {
	className?: string
}

export const MobileCategories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	console.log(categoryActiveId)
	const scrollToCategory = useCategoryStore(state => state.scrollToCategory)
	const { menuId } = useQueryParams()
	const { filteredCategories, categoriesLoading } = useMenuData(menuId)

	if (categoriesLoading) {
		return (
			<div className='bg-white py-2 px-4 flex flex-row'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Skeleton key={index} className='w-[100px] h-10 mr-1' />
				))}
			</div>
		)
	}

	return (
		<div className={cn('bg-white py-2 px-4', className)}>
			<Slider>
				{filteredCategories?.map(category => (
					<button
						key={category.id}
						className={cn(
							'text-[12px] leading-3.5 font-semibold uppercase border border-border rounded-sm min-h-10 px-3 mr-1',
							categoryActiveId === category.id && 'text-primary border-primary'
						)}
						onClick={() => scrollToCategory(category.id)}
					>
						{category.name}
					</button>
				))}
			</Slider>
		</div>
	)
}
