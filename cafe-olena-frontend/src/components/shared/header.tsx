'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { cn } from '@/lib/utils'
import { getAccessToken } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import {
	ArrowLeft,
	ChevronLeft,
	CircleUser,
	CreditCard,
	Keyboard,
	LogOut,
	Search,
	Settings,
	User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui'
import { Container } from './container'
import styles from './header.module.scss'
import { InfoButton } from './info-button'
import { SearchInput } from './search-input'
import { Title } from './title'

interface Props {
	className?: string
	hasAdminPage?: boolean
}

export const Header: React.FC<Props> = ({ hasAdminPage, className }) => {
	const pathname = usePathname()
	const isSearchPage = pathname === '/search'
	const [isMobile, setIsMobile] = useState(false)
	const [isAuthorization, setIsAuthorization] = useState(false)

	useEffect(() => {
		const token = getAccessToken()
		setIsAuthorization(!!token)
	}, [])

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => setIsAuthorization(false),
	})

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	if (isSearchPage && isMobile) {
		return (
			<div className='flex flex-row items-center gap-4 bg-white p-4 w-full border-b-[1px] border-border'>
				<Link
					href={DASHBOARD_PAGES.MENU}
					className='bg-primary min-w-12 min-h-10 flex items-center justify-center border border-border rounded-sm shadow-md opacity-90'
				>
					<ChevronLeft className='text-white' width={20} height={20} />
				</Link>
				<div className='text-[16px] font-bold leading-[19px]'>
					Пошук по меню
				</div>
			</div>
		)
	}
	return (
		<header className={cn(styles.header, className)}>
			<Container className='flex items-center justify-between max-md:bg-gray'>
				<Link className='hidden max-md:block p-4' href='/'>
					<div className='bg-white min-w-10 min-h-10 flex items-center justify-center border border-border rounded-sm'>
						<ArrowLeft width={20} height={20} />
					</div>
				</Link>
				<Link className='flex items-center p-[14px] max-md:hidden' href='/'>
					<Image
						className='rounded-sm'
						src='/logo.png'
						width='80'
						height='80'
						alt='logo'
					/>
					<Title className='ml-4 font-light' title='Кафе-Бар' />
					<Title className='olena' title='Олена' />
				</Link>
				{!hasAdminPage && (
					<div className='flex flex-row items-center gap-2 p-4 '>
						{isAuthorization && (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className='bg-white min-w-10 min-h-10 flex items-center justify-center border border-border rounded-sm shadow-md hover:cursor-pointer'>
										<CircleUser width={20} height={20} />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='w-56'>
									<DropdownMenuLabel>Кафе-бар Олена</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<User className='mr-2 h-4 w-4' />
											<span>Profile</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<CreditCard className='mr-2 h-4 w-4' />
											<span>Billing</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Settings className='mr-2 h-4 w-4' />
											<span>Settings</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Keyboard className='mr-2 h-4 w-4' />
											<span>Keyboard shortcuts</span>
										</DropdownMenuItem>
									</DropdownMenuGroup>

									<DropdownMenuSeparator />
									<DropdownMenuItem
										onClick={() => {
											if (
												window.confirm('Ви дійсно бажаєте вийти з аккаунта?')
											) {
												mutate()
											}
										}}
									>
										<LogOut className='mr-2 h-4 w-4' />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						)}
						<SearchInput className='flex max-md:hidden shadow-md' />
						<Link
							href={DASHBOARD_PAGES.SEARCH}
							className='hidden max-md:flex bg-white min-w-10 min-h-10 items-center justify-center border border-border rounded-sm shadow-md'
						>
							<Search width={20} height={20} />
						</Link>
						<div className='bg-white min-w-10 min-h-10 flex items-center justify-center border border-border rounded-sm shadow-md'>
							<InfoButton />
						</div>
					</div>
				)}
			</Container>
		</header>
	)
}
