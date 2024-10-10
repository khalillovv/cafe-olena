import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Title } from '../title'

interface Props {
	className?: string
}

export const MobileHeader: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex items-center p-[14px] bg-white border-b-[1px] border-border',
				className
			)}
		>
			<Image
				className='rounded-sm'
				src='/logo.png'
				width='60'
				height='60'
				alt='logo'
			/>
			<div className='flex flex-col ml-4'>
				<div className='flex flex-row'>
					<Title className='font-light' title='Кафе-Бар' />
					<Title className='olena' title='Олена' />
				</div>
				<p className='text-grayDark text-[12px] font-normal'>
					проспект Князя Володимира Великого, 129,б, Одеса,
				</p>
			</div>
		</div>
	)
}
