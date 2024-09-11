import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const DesktopInformation: React.FC<Props> = ({ className }) => {
	return <div className={cn('w-[272px]', className)}>information</div>
}
