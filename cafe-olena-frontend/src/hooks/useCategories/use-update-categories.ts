import { categoryService } from '@/services/category.service'
import { TypeCategoryFormState } from '@/types/category.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useUpdateCategories(key?: number) {
	const queryClient = useQueryClient()

	const { mutate: updateCategories } = useMutation({
		mutationKey: ['update categories', key],
		mutationFn: ({ id, data }: { id: number; data: TypeCategoryFormState }) =>
			toast.promise(categoryService.updateCategory(id, data), {
				loading: 'Оновлення категорії...',
				success: 'Категорію успішно оновлено!',
				error: 'Помилка при оновлені категорії',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['categories'],
			})
		},
	})
	return { updateCategories }
}
