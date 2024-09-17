'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui'
import { useMenu } from '@/lib/useMenu'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const DesktopCategories: React.FC<Props> = ({ className }) => {
	const { menu } = useMenu()
	return (
		<div className={cn('w-[272px] mb-4', className)}>
			<Accordion type='single' collapsible className='w-full'>
				{menu &&
					menu.map(item => (
						<AccordionItem key={item.id} value={item.id} className='w-full'>
							<AccordionTrigger>{item.name}</AccordionTrigger>
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
