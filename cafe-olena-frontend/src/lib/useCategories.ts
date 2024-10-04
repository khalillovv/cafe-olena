import { categoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export function useCategories(menuId?: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['categories', menuId],
		queryFn: () => categoryService.getCategories(menuId),
	})

	return { categories: data, isLoading, error }
}
