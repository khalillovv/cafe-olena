import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const MenuSectionLoading: React.FC<Props> = ({ className }) => {
	return <div className={cn('bg-white h-full', className)}>loading</div>
}
