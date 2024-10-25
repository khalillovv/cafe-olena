// TODO: добавить стили
import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Not Found',
	...NO_INDEX_PAGE,
}

export default function NotFoundPage() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-6xl font-bold'>404 - Сторінку не знайдено</h1>
			<p className='mt-4 text-lg'>Вибачте, але ця сторінка не існує.</p>
			<Link
				className='flex flex-row gap-2 mt-6 hover:text-primary transition-colors'
				href='/'
			>
				<ArrowLeftCircle />
				Повернутися на головну
			</Link>
		</div>
	)
}
