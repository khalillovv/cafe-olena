import { Container, Footer } from '@/components'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Best one for planning',
}

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-grow max-md:bg-gray'>
				<Container>{children}</Container>
			</main>
			<Footer />
		</div>
	)
}
