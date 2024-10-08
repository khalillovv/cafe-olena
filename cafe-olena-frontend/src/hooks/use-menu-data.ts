import { useCategories } from '@/lib/useCategories'
import { useMenu } from '@/lib/useMenu'
import { useProducts } from '@/lib/useProducts'

export const useMenuData = (menuId?: number, value?: string) => {
	const { categories, isLoading: categoriesLoading } = useCategories(menuId)
	const { menu, isLoading: menuLoading } = useMenu()
	const { products, isLoading: productsLoading } = useProducts(value)

	return {
		menu,
		categories,
		categoriesLoading,
		menuLoading,
		products,
		productsLoading,
	}
}
