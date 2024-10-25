'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Skeleton,
} from '@/components/ui'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useMenuData, useQueryParams } from '@/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
	hasSearch?: boolean
	className?: string
}

export const DesktopCategories: React.FC<Props> = ({
	hasSearch,
	className,
}) => {
	const { menuId } = useQueryParams()
	const { filteredMenu, menuLoading } = useMenuData(menuId)

	if (menuLoading) {
		return (
			<div className={cn('w-[272px] mb-4', className)}>
				<Skeleton className='w-40 h-9' />
				{Array.from({ length: 10 }).map((_, index) => (
					<Skeleton key={index} className='w-24 h-7 my-2' />
				))}
				<Skeleton className='w-40 h-9' />
			</div>
		)
	}

	return (
		<div className={cn('w-[272px] mb-4', className)}>
			<Accordion
				type='single'
				collapsible
				className='w-full'
				value={!hasSearch && menuId ? `${menuId}` : undefined}
			>
				{filteredMenu?.map(item => (
					<AccordionItem key={item.id} value={`${item.id}`} className='w-full'>
						<AccordionTrigger>
							<Link href={`${DASHBOARD_PAGES.MENU}?menuId=${item.id}`}>
								{item.name}
							</Link>
						</AccordionTrigger>
						{item.categories && item.categories.length > 0 && (
							<>
								{item.categories
									.filter(
										category =>
											category.products && category.products.length > 0
									)
									.map(category => (
										<AccordionContent key={category.id}>
											{category.name}
										</AccordionContent>
									))}
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
