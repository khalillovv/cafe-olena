'use client'
import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
import React from 'react'

interface Props {
	className?: string
}

export const ScrollButton: React.FC<Props> = ({ className }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div className={cn('p-4', className)}>
			<button
				onClick={scrollToTop}
				className='flex flex-col items-center justify-center w-full p-3 border border-border rounded-md'
			>
				<ChevronUp />
				<span className='text-[16px] leading-6 font-medium'>На початок</span>
			</button>
		</div>
	)
}
