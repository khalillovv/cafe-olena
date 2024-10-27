import { useCategories } from '@/lib/useCategories'
import { useMenu } from '@/lib/useMenu'
import { useProducts } from '@/lib/useProducts'
import { useDeleteCategories } from './useCategories'
import { useDeleteMenu } from './useMenu'
import { useDeleteProduct } from './useProduct'

export const useMenuData = (menuId?: number) => {
	const {
		categories,
		filteredCategories,
		isLoading: categoriesLoading,
	} = useCategories(menuId)
	const { menu, filteredMenu, isLoading: menuLoading } = useMenu()
	const { deleteMenu } = useDeleteMenu()
	const { deleteCategories } = useDeleteCategories()
	const { deleteProduct } = useDeleteProduct()
	const { products, isLoading: productsLoading } = useProducts()

	return {
		menu,
		filteredMenu,
		categories,
		filteredCategories,
		categoriesLoading,
		menuLoading,
		products,
		productsLoading,
		deleteMenu,
		deleteCategories,
		deleteProduct,
	}
}
