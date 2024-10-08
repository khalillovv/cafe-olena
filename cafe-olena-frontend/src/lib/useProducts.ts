import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export function useProducts(value?: string) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['product', value],
		queryFn: () =>
			value ? productService.searchProduct(value) : productService.getProduct(),
	})

	return { products: data, isLoading, error }
}
