import { productService } from '@/services/product.service'
import { TypeProductFormState } from '@/types/product.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useUpdateProduct(key?: number) {
	const queryClient = useQueryClient()

	const { mutate: updateProduct } = useMutation({
		mutationKey: ['update product', key],
		mutationFn: ({ id, data }: { id: number; data: TypeProductFormState }) =>
			toast.promise(productService.updateProduct(id, data), {
				loading: 'Оновлення позиції...',
				success: 'Позицію успішно оновлено!',
				error: 'Помилка при оновлені позиції',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['product'],
			})
		},
	})
	return { updateProduct }
}
