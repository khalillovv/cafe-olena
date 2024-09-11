import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const DesktopCategories: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('w-[272px]', className)}>
			<Accordion type='single' collapsible className='w-full'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>МЕНЮ</AccordionTrigger>
					<AccordionContent>салаты</AccordionContent>
					<AccordionContent>cупи</AccordionContent>
					<AccordionContent>риба</AccordionContent>
					<AccordionContent>мясо</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>БАР</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other
						components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
