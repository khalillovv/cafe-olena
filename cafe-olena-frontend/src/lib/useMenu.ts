import { menuService } from '@/services/menu.service'
import { useQuery } from '@tanstack/react-query'

export function useMenu() {
	const { data } = useQuery({
		queryKey: ['menu'],
		queryFn: () => menuService.getMenu(),
	})

	return { menu: data }
}
