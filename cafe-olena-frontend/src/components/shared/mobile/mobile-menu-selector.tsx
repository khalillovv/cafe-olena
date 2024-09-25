'use client'
import { Skeleton } from '@/components/ui'
import { useMenu } from '@/lib/useMenu'
import { cn } from '@/lib/utils'
import React from 'react'
import { Slider } from '../slider'

interface Props {
	className?: string
}

export const MobileMenuSelector: React.FC<Props> = ({ className }) => {
	const { menu } = useMenu()
	return (
		<div className={cn('h-14', className)}>
			<Slider>
				{menu
					? menu.map(item => (
							<a key={item.id} href=''>
								<div className='text-[20px] leading-[56px] text-grayDark font-semibold ml-4 uppercase'>
									{item.name}
									{/* <div className='border-b border-primary' /> */}
								</div>
							</a>
					  ))
					: Array.from({ length: 2 }).map((_, index) => (
							<Skeleton key={index} className='w-[100px] h-8 ml-4 mt-3' />
					  ))}
			</Slider>
		</div>
	)
}
