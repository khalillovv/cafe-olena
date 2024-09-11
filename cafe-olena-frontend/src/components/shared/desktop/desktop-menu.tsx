'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
	className?: string
}

export const DesktopMenu: React.FC<Props> = ({ className }) => {
	return <div className={cn('w-[600px]', className)}>Инфа инфа инфа</div>
}
