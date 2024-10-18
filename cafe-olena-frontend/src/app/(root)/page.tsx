'use client'
import { MobileHeader, MobileHomeMenu, Skeleton } from '@/components'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		if (window.innerWidth >= 768) {
			router.push(DASHBOARD_PAGES.MENU)
		}
	}, [router])
	return (
		<main>
			<div className='hidden md:block w-full h-[100vh]'>
				<Skeleton className='w-full h-[108px] mb-[24px]' />
				<Skeleton className='w-full h-full' />
			</div>
			<div className='block md:hidden'>
				<MobileHeader />
				<MobileHomeMenu className='flex-grow' />
			</div>
		</main>
	)
}
