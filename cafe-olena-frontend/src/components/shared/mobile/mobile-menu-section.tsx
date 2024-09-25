import { cn } from '@/lib/utils'
import React from 'react'
import { MenuSection } from '../menu-section'
import { ScrollButton } from '../scroll-button'
import { MobileCategories } from './mobile-categories'

interface Props {
	className?: string
}

export const MobileMenuSection: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('border border-border', className)}>
			<div className='sticky top-0 z-10'>
				<MobileCategories />
			</div>
			<MenuSection />
			<ScrollButton />
		</div>
	)
}
