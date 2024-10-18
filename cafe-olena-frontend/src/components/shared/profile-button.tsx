import { getAccessToken } from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import {
	CircleUser,
	CreditCard,
	Keyboard,
	LogOut,
	Settings,
	User,
} from 'lucide-react'
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
