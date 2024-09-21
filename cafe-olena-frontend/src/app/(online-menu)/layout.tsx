import { Container, Footer, Header } from '@/components'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Кафе-бар Олена',
}

export default function OnlineMenuLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow'>
				<Container>{children}</Container>
			</main>
			<Footer />
		</div>
	)
}
