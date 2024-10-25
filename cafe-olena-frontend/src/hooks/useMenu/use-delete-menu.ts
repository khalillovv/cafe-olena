import { menuService } from '@/services/menu.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteMenu() {
	const queryClient = useQueryClient()

	const { mutate: deleteMenu, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete menu'],
		mutationFn: (id: number) =>
			toast.promise(menuService.deleteMenu(id), {
				loading: 'Видалення меню...',
				success: 'Меню успішно видалено!',
				error: 'Помилка при видалені меню',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['menu'],
			})
		},
	})

	return { deleteMenu, isDeletePending }
}
