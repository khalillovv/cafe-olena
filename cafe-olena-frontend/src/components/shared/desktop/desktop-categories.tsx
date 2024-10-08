'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Skeleton,
} from '@/components/ui'
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
	const { menu, menuLoading } = useMenuData(menuId)

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
				{menu?.map(item => (
					<AccordionItem key={item.id} value={`${item.id}`} className='w-full'>
						<AccordionTrigger>
							<Link href={`/online-menu?menuId=${item.id}`}>{item.name}</Link>
						</AccordionTrigger>
						{item.categories &&
							item.categories.length > 0 &&
							item.categories.map(category => (
								<AccordionContent key={category.id}>
									{category.name}
								</AccordionContent>
							))}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
