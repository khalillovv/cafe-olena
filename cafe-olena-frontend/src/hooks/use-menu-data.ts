import { useCategories } from '@/lib/useCategories'
import { useMenu } from '@/lib/useMenu'

export const useMenuData = (menuId?: number, value?: string) => {
	const {
		categories,
		filteredCategories,
		isLoading: categoriesLoading,
	} = useCategories(menuId)
	const { menu, filteredMenu, isLoading: menuLoading } = useMenu()

	return {
		menu,
		filteredMenu,
		categories,
		filteredCategories,
		categoriesLoading,
		menuLoading,
	}
}
