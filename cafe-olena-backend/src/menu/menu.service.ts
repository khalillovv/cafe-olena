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
			orderBy: {
				id: 'asc',
			},
		})
	}

	async create(dto: MenuDto) {
		return this.prisma.menu.create({
			data: dto,
		})
	}

	async update(dto: Partial<MenuDto>, menuId: number) {
		return this.prisma.menu.update({
			where: {
				id: menuId,
			},
			data: dto,
		})
	}

	async delete(menuId: number) {
		return this.prisma.$transaction(async prisma => {
			await prisma.product.deleteMany({
				where: {
					category: {
						menuId: menuId,
					},
				},
			})

			await prisma.category.deleteMany({
				where: {
					menuId: menuId,
				},
			})

			return prisma.menu.delete({
				where: {
					id: menuId,
				},
			})
		})
	}
}
