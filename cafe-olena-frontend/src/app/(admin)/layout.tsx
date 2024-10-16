import { Header } from '@/components'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Кафе-бар Олена',
}

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='min-h-screen'>
			<Header hasAdminPage />
			{children}
		</main>
	)
}
