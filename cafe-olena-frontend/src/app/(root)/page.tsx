'use client'
import { Skeleton } from '@/components'
import { MobileHeader } from '@/components/shared/mobile'
import { MobileMenuChoice } from '@/components/shared/mobile/mobile-menu-choice'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		if (window.innerWidth >= 768) {
			router.push('/online-menu')
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
				<MobileMenuChoice className='flex-grow' />
			</div>
		</main>
	)
}
