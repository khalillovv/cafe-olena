import { DesktopContent } from '@/components'

export default function Home() {
	return (
		<main>
			<div className='hidden md:block'>
				<DesktopContent />
			</div>
			<div className='block md:hidden'>телефон</div>
		</main>
	)
}
