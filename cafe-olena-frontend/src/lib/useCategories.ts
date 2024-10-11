import { categoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export function useCategories(menuId?: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['categories', menuId],
		queryFn: () => categoryService.getCategories(menuId),
	})

	const filteredCategories = data?.filter(
		category => category.products && category.products.length > 0
	)

	return { categories: data, filteredCategories, isLoading, error }
}
