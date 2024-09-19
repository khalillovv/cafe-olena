'use client'
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
			<div className='hidden md:block w-full h-[100vh]' />
			<div className='block md:hidden'>телефон</div>
		</main>
	)
}
