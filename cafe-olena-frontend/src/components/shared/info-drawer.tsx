import { MapPinnedIcon, Phone } from 'lucide-react'
import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui'
import { InformationBlock } from './information-block'
import { Title } from './title'

interface Props {
	className?: string
}

export const InfoDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='bg-gray'>
				<SheetHeader>
					<SheetTitle className='text-[14px] font-semibold'>
						Контакти
					</SheetTitle>
				</SheetHeader>
				<InformationBlock
					hasDrawer
					icon={MapPinnedIcon}
					text='проспект Добровольського, 129,б, Одеса, Одеська область, 65000'
					href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
				/>
				<InformationBlock
					hasDrawer
					icon={Phone}
					text='+380984027902'
					href='tel:+380984027902'
				/>
			</SheetContent>
		</Sheet>
	)
}
