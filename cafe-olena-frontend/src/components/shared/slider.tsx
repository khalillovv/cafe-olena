import React, { PropsWithChildren, useRef } from 'react'

export const Slider: React.FC<PropsWithChildren> = ({ children }) => {
	const sliderRef = useRef<HTMLDivElement>(null)

	return (
		<div className='flex w-full items-center gap-2 overflow-hidden'>
			<div
				ref={sliderRef}
				className='flex overflow-x-auto scrollbar-hidden whitespace-nowrap'
			>
				{children}
			</div>
		</div>
	)
}
