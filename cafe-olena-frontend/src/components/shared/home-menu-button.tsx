import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Title } from './title'

interface Props {
	title: string
	className?: string
}

export const HomeMenuButton: React.FC<Props> = ({ title, className }) => {
	return (
		// TODO: сделать правильную ссылку
		<Link href={'/online-menu'}>
			<div
				className={cn(
					'flex flex-row items-center justify-between px-4 py-4 bg-white rounded-sm shadow-md mb-2',
					className
				)}
			>
				<Title className='text-[20px] font-semibold uppercase' title={title} />
				<ChevronRight width={32} height={32} />
			</div>
		</Link>
	)
}
