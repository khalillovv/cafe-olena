import { menuService } from '@/services/menu.service'
import { TypeMenuFormState } from '@/types/menu.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useCreateMenu() {
	const queryClient = useQueryClient()

	const { mutate: createMenu, isPending: isCreatePending } = useMutation({
		mutationKey: ['create menu'],
		mutationFn: (data: TypeMenuFormState) =>
			toast.promise(menuService.createMenu(data), {
				loading: 'Створення меню...',
				success: 'Меню успішно добавлено!',
				error: 'Помилка при створені меню',
			}),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['menu'],
			})
		},
	})

	return { createMenu, isCreatePending }
}
