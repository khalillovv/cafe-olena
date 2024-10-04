import { menuService } from '@/services/menu.service'
import { useQuery } from '@tanstack/react-query'

export function useMenu() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['menu'],
		queryFn: () => menuService.getAll(),
	})

	return { menu: data, isLoading, error }
}
