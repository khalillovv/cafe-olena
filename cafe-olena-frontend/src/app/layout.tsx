import { Great_Vibes, Roboto_Slab } from 'next/font/google'
import './globals.scss'
import { Providers } from './providers'

const zen = Roboto_Slab({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
})

const vibes = Great_Vibes({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-vibes',
	style: ['normal'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link data-rh='true' rel='icon' href='/logo.png' />
			</head>
			<body className={`${zen.className} ${vibes.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
