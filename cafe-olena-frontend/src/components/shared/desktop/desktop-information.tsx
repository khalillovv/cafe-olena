import { cn } from '@/lib/utils'
import { MapPinnedIcon } from 'lucide-react'
import React from 'react'
import { InformationBlock } from '../information-block'

interface Props {
	className?: string
}

export const DesktopInformation: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('w-[272px]', className)}>
			<InformationBlock
				icon={MapPinnedIcon}
				title='Адреса:'
				text='проспект Добровольського, 129,б, Одеса, Одеська область, 65000'
				href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
			/>
		</div>
	)
}
