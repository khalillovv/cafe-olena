import type { Metadata } from 'next'

import { DesktopSearchContent, MobileSearchContent } from '@/components'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Пошук',
	...NO_INDEX_PAGE,
}

export default function searchPage() {
	return (
		<>
			<div className='hidden md:block'>
				<DesktopSearchContent />
			</div>
			<div className='block md:hidden'>
				<MobileSearchContent />
			</div>
		</>
	)
}