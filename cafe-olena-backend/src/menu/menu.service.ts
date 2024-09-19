import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { MenuDto } from './dto/menu.dto'

@Injectable()
export class MenuService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.menu.findMany({
			include: {
				categories: {
					include: {
						products: true,
					},
				},
			},
		})
	}

	async create(dto: MenuDto) {
		return this.prisma.menu.create({
			data: dto,
		})
	}

	async delete(menuId: number) {
		return this.prisma.menu.delete({
			where: {
				id: menuId,
			},
		})
	}
}
