import React, { PropsWithChildren, useEffect, useRef } from 'react'

interface SliderProps extends PropsWithChildren {
	activeItemId?: number | string
}

export const Slider: React.FC<SliderProps> = ({ children, activeItemId }) => {
	const sliderRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (sliderRef.current && activeItemId) {
			const activeElement = sliderRef.current.querySelector(
				`[data-id='${activeItemId}']`
			)
			if (activeElement) {
				activeElement.scrollIntoView({
					behavior: 'smooth',
					inline: 'center',
					block: 'nearest',
				})
			}
		}
	}, [activeItemId])

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
