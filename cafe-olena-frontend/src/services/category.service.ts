import { axiosWithAuth } from '@/api/interceptors'
import { ICategory, TypeCategoryFormState } from '@/types/category.types'

class CategoryService {
	private BASE_URL = '/category'

	async getCategory() {
		const response = await axiosWithAuth.get<ICategory[]>(this.BASE_URL)
		return response.data
	}

	async createCategory(data: TypeCategoryFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async deleteCategory(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const categoryService = new CategoryService()
