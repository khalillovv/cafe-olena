import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { useMenuData } from './use-menu-data'

export const useQueryParams = () => {
	const { filteredMenu } = useMenuData()
	const searchParams = useSearchParams()
	const menuId = useMemo(() => {
		if (searchParams.get('menuId')) {
			return Number(searchParams.get('menuId'))
		}
		return filteredMenu && filteredMenu.length > 0 ? filteredMenu[0].id : 0
	}, [searchParams, filteredMenu])
	const categoryName = searchParams.get('cat')
	const searchValue = searchParams.get('value')

	const generateUrlWithParams = (newParams: Record<string, string>) => {
		const params = new URLSearchParams(searchParams)
		Object.entries(newParams).forEach(([key, value]) => {
			params.set(key, value)
		})
		return `?${params.toString()}`
	}
	return { menuId, categoryName, searchValue, generateUrlWithParams }
}
