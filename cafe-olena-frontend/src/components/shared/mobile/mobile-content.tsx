import { cn } from '@/lib/utils'
import React from 'react'
import { MobileMenuSection } from './mobile-menu-section'
import { MobileMenuSelector } from './mobile-menu-selector'

interface Props {
	className?: string
}

export const MobileContent: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col bg-white', className)}>
			<MobileMenuSelector />
			<MobileMenuSection />
		</div>
	)
}
