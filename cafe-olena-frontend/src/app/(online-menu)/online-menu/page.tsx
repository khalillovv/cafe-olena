import type { Metadata } from 'next'

import { DesktopContent } from '@/components'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Меню',
	...NO_INDEX_PAGE,
}

export default function MenuPage() {
	return (
		<>
			<div className='hidden md:block'>
				<DesktopContent />
			</div>
			<div className='block md:hidden'>телефон</div>
		</>
	)
}
