import { categoryService } from '@/services/category.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteCategories() {
	const queryClient = useQueryClient()

	const { mutate: deleteCategories, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete categories'],
		mutationFn: (id: number) =>
			toast.promise(categoryService.deleteCategory(id), {
				loading: 'Видалення категорії...',
				success: 'Категорія успішно видалено!',
				error: 'Помилка при видалені категорії',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories'],
			})
		},
	})

	return { deleteCategories, isDeletePending }
}
