import { productService } from '@/services/product.service'
import { TypeProductFormState } from '@/types/product.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useCreateProduct() {
	const queryClient = useQueryClient()

	const { mutate: createProduct, isPending: isCreatePending } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: TypeProductFormState) =>
			toast.promise(productService.createProduct(data), {
				loading: 'Створення позиції...',
				success: 'Позиція додано успішно!',
				error: 'Помилка при створені позиції',
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['product'],
			})
		},
	})

	return { createProduct, isCreatePending }
}
