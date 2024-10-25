import { NextRequest, NextResponse } from 'next/server'
import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAdminPage = url.includes(DASHBOARD_PAGES.ADMIN)
	const isMenuSettingsPage = url.includes(DASHBOARD_PAGES.MENU_SETTINGS)

	if (isMenuSettingsPage && !accessToken) {
		return NextResponse.rewrite(new URL(DASHBOARD_PAGES.NOT_FOUND, url))
	}

	if (isAdminPage && !isMenuSettingsPage && accessToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}

	if (isAdminPage) {
		return NextResponse.next()
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/:path*', '/admin/:path'],
}
