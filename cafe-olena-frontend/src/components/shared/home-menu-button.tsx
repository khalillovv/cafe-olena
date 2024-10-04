import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Title } from './title'

interface Props {
	id: number
	title: string
	className?: string
}

export const HomeMenuButton: React.FC<Props> = ({ id, title, className }) => {
	return (
		<Link href={`/online-menu?menuId=${id}`}>
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
