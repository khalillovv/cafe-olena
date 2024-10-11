import { useCategories } from '@/lib/useCategories'
import { useMenu } from '@/lib/useMenu'

export const useMenuData = (menuId?: number, value?: string) => {
	const {
		categories,
		filteredCategories,
		isLoading: categoriesLoading,
	} = useCategories(menuId)
	const { menu, isLoading: menuLoading } = useMenu()

	return {
		menu,
		categories,
		filteredCategories,
		categoriesLoading,
		menuLoading,
	}
}
