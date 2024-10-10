'use client'

import { CircleX, Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useClickAway, useDebounce } from 'react-use'
import { cn } from '../../lib/utils'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [focused, setFocused] = React.useState(false)
	const ref = React.useRef(null)

	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768

	useClickAway(ref, () => {
		setFocused(false)
	})

	useEffect(() => {
		if (pathname === '/online-menu') {
			setSearchQuery('')
		}
	}, [pathname])

	useDebounce(
		() => {
			if (isDesktop) {
				const newParams = new URLSearchParams(searchParams as any)

				if (pathname === '/online-menu' && searchQuery) {
					router.replace(`/search?value=${searchQuery}`)
				} else if (pathname === '/search') {
					if (searchQuery) {
						newParams.set('value', searchQuery)
					}

					router.replace(`/search?${newParams.toString()}`)
				}
			} else {
				if (pathname === '/search') {
					const newParams = new URLSearchParams(searchParams as any)

					if (searchQuery) {
						newParams.set('value', searchQuery)
					} else {
						newParams.delete('value')
					}

					router.replace(`/search?${newParams.toString()}`)
				}
			}
		},
		250,
		[searchQuery, pathname]
	)

	return (
		<div
			ref={ref}
			className={cn(
				'flex rounded-[8px] flex-1 justify-between items-center relative h-11 z-30 border bg-white',
				focused && 'border-primary ',
				className
			)}
		>
			<Search
				className='absolute left-3 top-1/2 translate-y-[-50%] h-5 text-grayDark'
				width={20}
				height={20}
			/>
			<input
				className='rounded-[8px] outline-none w-full bg-gray-50 pl-11 placeholder:font-semibold'
				type='text'
				placeholder='Пошук'
				onFocus={() => setFocused(true)}
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			{searchQuery && (
				<CircleX
					onClick={() => setSearchQuery('')}
					width={24}
					height={24}
					className='mx-2 text-red hover:cursor-pointer'
				/>
			)}
		</div>
	)
}
