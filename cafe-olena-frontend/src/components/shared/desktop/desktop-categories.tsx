'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { IMenu } from '@/types/menu.types'
import React from 'react'

interface Props {
	className?: string
	menu?: IMenu[]
}

export const DesktopCategories: React.FC<Props> = ({ menu, className }) => {
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

// {menu &&
// 	menu.map(item => (
// 		<AccordionItem key={item.id} value={item.id} className='w-full'>
// 			<AccordionTrigger>{item.name}</AccordionTrigger>
// 			{item.categories && item.categories.length > 0 ? (
// 				item.categories.map(category => (
// 					<AccordionContent key={category.id}>
// 						{category.products?.map(product => (
// 							<p key={product.id}>{product.name}</p>
// 						))}
// 					</AccordionContent>
// 				))
// 			) : (
// 				<AccordionContent>Нет категорий</AccordionContent>
// 			)}
// 		</AccordionItem>
// 	))}
