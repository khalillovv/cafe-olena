import { menuService } from '@/services/menu.service'
import { TypeMenuFormState } from '@/types/menu.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useUpdateMenu(key?: number) {
	const queryClient = useQueryClient()

	const { mutate: updateMenu } = useMutation({
		mutationKey: ['update menu', key],
		mutationFn: ({ id, data }: { id: number; data: TypeMenuFormState }) =>
			toast.promise(menuService.updateMenu(id, data), {
				loading: 'Оновлення меню...',
				success: 'Меню успішно оновлено!',
				error: 'Помилка при оновлені меню',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['menu'],
			})
		},
	})
	return { updateMenu }
}
