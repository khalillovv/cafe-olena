import { axiosWithAuth } from '@/api/interceptors'
import { ICategory, TypeCategoryFormState } from '@/types/category.types'

class CategoryService {
	private BASE_URL = '/category'

	async getCategories(menuId?: number) {
		const response = await axiosWithAuth.get<ICategory[]>(this.BASE_URL, {
			params: menuId ? { menuId } : {}, // Передаем menuId как параметр запроса
		})
		return response.data
	}

	async createCategory(data: TypeCategoryFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateCategory(id: number, data: TypeCategoryFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteCategory(id: number) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const categoryService = new CategoryService()
