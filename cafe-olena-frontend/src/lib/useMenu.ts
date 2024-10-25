import { menuService } from '@/services/menu.service'
import { useQuery } from '@tanstack/react-query'

export function useMenu() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['menu'],
		queryFn: () => menuService.getAll(),
	})

	const filteredMenu = data?.filter(
		menu =>
			menu.categories &&
			menu.categories.length > 0 &&
			menu.categories.some(
				category => category.products && category.products.length > 0
			)
	)

	return { menu: data, filteredMenu, isLoading, error }
}
