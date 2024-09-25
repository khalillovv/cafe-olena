import { categoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryService.getCategory(),
	})

	return { categories: data, isLoading, error }
}
