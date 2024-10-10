'use client'

import { CircleX, Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useClickAway } from 'react-use'
import { cn } from '../../lib/utils'

interface Props {
	className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const [focused, setFocused] = React.useState(false)
	const ref = React.useRef(null)
	const inputTimeout = useRef<NodeJS.Timeout | null>(null)

	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768

	useClickAway(ref, () => {
		setFocused(false)
	})

	// Очистка поискового запроса при возврате на /online-menu
	useEffect(() => {
		if (pathname === '/online-menu') {
			setSearchQuery('')
		}
	}, [pathname])

	// Функция для обработки поискового запроса с таймером
	const handleSearch = (query: string) => {
		if (inputTimeout.current) {
			clearTimeout(inputTimeout.current)
		}

		inputTimeout.current = setTimeout(() => {
			// Логика для десктопа
			if (isDesktop) {
				if (query) {
					// Перенаправление на /search с параметром value
					router.push(`/search?value=${encodeURIComponent(query)}`)
				} else if (!query && pathname === '/search') {
					// Если запрос очищен, вернуться на /online-menu
					router.push('/online-menu')
				}
			} else {
				// Логика для мобильной версии
				const newParams = new URLSearchParams(searchParams as any)

				if (query) {
					newParams.set('value', query)
				} else {
					newParams.delete('value')
				}

				router.replace(`/search?${newParams.toString()}`)
			}
		}, 500) // Задержка 500 мс
	}

	// Обновление поискового запроса
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value
		setSearchQuery(query)
		handleSearch(query)
	}

	// Очистка поля поиска и редирект на /online-menu
	const handleClearSearch = () => {
		setSearchQuery('') // Очищаем поле
		handleSearch('') // Вызываем функцию для перенаправления на /online-menu
	}

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
				onChange={handleInputChange}
			/>
			{searchQuery && (
				<CircleX
					onClick={handleClearSearch}
					width={24}
					height={24}
					className='mx-2 text-red hover:cursor-pointer'
				/>
			)}
		</div>
	)
}
