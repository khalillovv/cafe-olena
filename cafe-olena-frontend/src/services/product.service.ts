import { axiosWithAuth } from '@/api/interceptors'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { IProduct, TypeProductFormState } from '@/types/product.types'

class ProductService {
	private BASE_URL = '/product'

	async getProduct() {
		const response = await axiosWithAuth.get<IProduct[]>(this.BASE_URL)
		return response.data
	}

	async searchProduct(value: string) {
		const response = await axiosWithAuth.get<IProduct[]>(
			`${this.BASE_URL}${DASHBOARD_PAGES.SEARCH}`,
			{
				params: {
					value,
				},
			}
		)
		return response.data
	}

	async createProduct(data: TypeProductFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeProductFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteProduct(id: number) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const productService = new ProductService()
