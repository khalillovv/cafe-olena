'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { MenuSettingsCategory } from './menu-settings-category'
import { MenuSettingsMenu } from './menu-settings-menu'
import { MenuSettingsProduct } from './menu-settings-product'

interface Props {
	className?: string
}

export const MenuSettingsSection: React.FC<Props> = ({ className }) => {
	return (
		<div className='md:ml-[400px] p-5 w-full'>
			<div className={cn('flex flex-col md:flex-row w-full')}>
				<MenuSettingsMenu className='md:w-1/2' />
				<MenuSettingsCategory className='md:w-1/2' />
			</div>
			<MenuSettingsProduct />
		</div>
	)
}
