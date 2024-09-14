import { axiosWithAuth } from '@/api/interceptors'
import { IMenu, TypeMenuFormState } from '@/types/menu.types'

class MenuService {
	private BASE_URL = '/menu'

	async getMenu() {
		const response = await axiosWithAuth.get<IMenu[]>(this.BASE_URL)
		return response.data
	}

	async createMenu(data: TypeMenuFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async deleteMenu(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const menuService = new MenuService()
