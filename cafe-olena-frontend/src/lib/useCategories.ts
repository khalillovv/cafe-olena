import { categoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export function useCategories() {
	const { data } = useQuery({
		queryKey: ['category'],
		queryFn: () => categoryService.getCategory(),
	})

	return { categories: data }
}
