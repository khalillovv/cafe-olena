import { categoryService } from '@/services/category.service'
import { TypeCategoryFormState } from '@/types/category.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useCreateCategories() {
	const queryClient = useQueryClient()

	const { mutate: createCategories, isPending: isCreatePending } = useMutation({
		mutationKey: ['create categories'],
		mutationFn: (data: TypeCategoryFormState) =>
			toast.promise(categoryService.createCategory(data), {
				loading: 'Створення категорії...',
				success: 'Категорію додано успішно!',
				error: 'Помилка при створені категорії',
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['categories'],
			})
		},
	})

	return { createCategories, isCreatePending }
}
