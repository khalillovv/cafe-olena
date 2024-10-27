import { axiosWithAuth } from '@/api/interceptors'
import { IMenu, TypeMenuFormState } from '@/types/menu.types'

class MenuService {
	private BASE_URL = '/menu'

	async getAll() {
		const response = await axiosWithAuth.get<IMenu[]>(this.BASE_URL)
		return response.data
	}

	async createMenu(data: TypeMenuFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async deleteMenu(id: number) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateMenu(id: number, data: TypeMenuFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}
}

export const menuService = new MenuService()
