import type { Metadata } from 'next'

import {
	MenuSettingsButtons,
	MenuSettingsSection,
	MenuSettingsSidebar,
} from '@/components'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Налаштування меню',
	...NO_INDEX_PAGE,
}

export default function MenuSettingsPage() {
	return (
		<div className='flex flex-col md:flex-row'>
			<MenuSettingsButtons className='block md:hidden' />
			<MenuSettingsSidebar className='hidden md:block' />
			<MenuSettingsSection />
		</div>
	)
}
