'use client'
import { Skeleton } from '@/components/ui'
import { useMenuData, useQueryParams } from '@/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Slider } from '../slider'

interface Props {
	className?: string
}

export const MobileMenuSelector: React.FC<Props> = ({ className }) => {
	const { menuId } = useQueryParams()
	const { filteredMenu, menuLoading } = useMenuData()

	if (menuLoading) {
		return (
			<div className='h-14 flex flex-row'>
				{Array.from({ length: 2 }).map((_, index) => (
					<Skeleton key={index} className='w-[100px] h-8 ml-4 mt-3' />
				))}
			</div>
		)
	}

	return (
		<div className={cn('h-14', className)}>
			<Slider>
				{filteredMenu?.map(item => (
					<Link key={item.id} href={`?menuId=${item.id}`}>
						<button
							className={cn(
								'text-[20px] leading-[54px] text-grayDark font-semibold ml-4 uppercase border-b border-white transition-all duration-300 ease-in',
								menuId === item.id && 'text-black border-b-2 border-primary'
							)}
						>
							{item.name}
						</button>
					</Link>
				))}
			</Slider>
		</div>
	)
}
