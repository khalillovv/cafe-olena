import { AlignJustify } from 'lucide-react'
import React from 'react'
import { InfoDrawer } from './info-drawer'

interface Props {
	className?: string
}

export const InfoButton: React.FC<Props> = ({ className }) => {
	return (
		<InfoDrawer>
			<AlignJustify className='cursor-pointer' />
		</InfoDrawer>
	)
}
