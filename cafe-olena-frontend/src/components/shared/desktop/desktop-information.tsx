import { cn } from '@/lib/utils'
import { MapPinnedIcon, Phone } from 'lucide-react'
import React from 'react'
import { InformationBlock } from '../information-block'

interface Props {
	className?: string
}

export const DesktopInformation: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('w-[272px]', className)}>
			<p className='text-[14px] font-semibold text-grayDark mb-1'>
				Інформація про заклад
			</p>
			<InformationBlock
				icon={MapPinnedIcon}
				title='Адреса:'
				text='проспект Добровольського, 129,б, Одеса, Одеська область, 65000'
				href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
			/>
			<InformationBlock
				icon={Phone}
				title='Телефон:'
				text='+380984027902'
				href='tel:+380984027902'
			/>
		</div>
	)
}
