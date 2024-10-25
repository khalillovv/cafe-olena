import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { getAccessToken } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { CircleUser, LogOut, MenuSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui'

interface Props {
	className?: string
}

export const ProfileButton = () => {
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

	return (
		<>
			{isAuthorization ? (
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
							<Link href={DASHBOARD_PAGES.MENU_SETTINGS}>
								<DropdownMenuItem>
									<MenuSquare className='mr-2 h-4 w-4' />
									<span>Редагувати меню</span>
								</DropdownMenuItem>
							</Link>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								if (window.confirm('Ви дійсно бажаєте вийти з аккаунта?')) {
									mutate()
								}
							}}
						>
							<LogOut className='mr-2 h-4 w-4' />
							<span>Log out</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : null}
		</>
	)
}
