import { productService } from '@/services/product.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteProduct() {
	const queryClient = useQueryClient()

	const { mutate: deleteProduct, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete product'],
		mutationFn: (id: number) =>
			toast.promise(productService.deleteProduct(id), {
				loading: 'Видалення позиції...',
				success: 'Позицію успішно видалено!',
				error: 'Помилка при видалені позиції',
			}),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['product'],
			})
		},
	})

	return { deleteProduct, isDeletePending }
}
