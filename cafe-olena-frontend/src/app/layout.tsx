import { Container, Footer, Header } from '@/components'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import './globals.scss'
import { Providers } from './providers'

const zen = Roboto_Slab({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Best one for planning',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link data-rh='true' rel='icon' href='/assets/logo.png' />
			</head>
			<body className={zen.className}>
				<Providers>
					<Header />
					<Container>{children}</Container>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
