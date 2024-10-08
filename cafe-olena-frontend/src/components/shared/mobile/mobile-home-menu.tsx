'use client'
import { Skeleton } from '@/components/ui'
import { useMenuData } from '@/hooks'
import { cn } from '@/lib/utils'
import React from 'react'
import { HomeMenuButton } from '../home-menu-button'

interface Props {
	className?: string
}

export const MobileHomeMenu: React.FC<Props> = ({ className }) => {
	const { menu } = useMenuData()
	return (
		<div className={cn('bg-gray p-4', className)}>
			<div className='flex flex-row justify-center items-center mb-2'>
				<div className='border border-border h-[1px] w-full' />
				<p className='text-center text-grayDark font-bold text-[13px] px-3'>
					МЕНЮ:
				</p>
				<div className='border border-border h-[1px] w-full' />
			</div>
			<div>
				{menu
					? menu.map(item => (
							<HomeMenuButton key={item.id} id={item.id} title={item.name} />
					  ))
					: Array.from({ length: 2 }).map((_, index) => (
							<Skeleton key={index} className='w-[398px] h-16 mb-2' />
					  ))}
			</div>
		</div>
	)
}
