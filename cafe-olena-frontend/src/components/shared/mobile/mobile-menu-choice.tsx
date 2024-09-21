import { useMenu } from '@/lib/useMenu'
import { cn } from '@/lib/utils'
import React from 'react'
import { MenuChoiceButton } from '../menu-choice-button'

interface Props {
	className?: string
}

export const MobileMenuChoice: React.FC<Props> = ({ className }) => {
	const { menu } = useMenu()
	return (
		<div className={cn('bg-gray p-4', className)}>
			<div className='flex flex-row justify-center items-center mb-2'>
				<div className='border border-border h-[1px] w-full' />
				<p className='text-center text-grayDark text-[13px] px-3'>МЕНЮ:</p>
				<div className='border border-border h-[1px] w-full' />
			</div>
			<div>
				{menu &&
					menu.map(item => (
						<MenuChoiceButton key={item.id} title={item.name} />
					))}
			</div>
		</div>
	)
}
