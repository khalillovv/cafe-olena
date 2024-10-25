import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CategoryDto } from './dto/category.dto'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getAll(menuId?: number) {
		return this.prisma.category.findMany({
			where: {
				menuId: menuId ? menuId : undefined,
			},
			include: {
				products: true,
			},
			orderBy: {
				id: 'asc',
			},
		})
	}

	async create(dto: CategoryDto) {
		return this.prisma.category.create({
			data: dto,
		})
	}

	async update(dto: Partial<CategoryDto>, categoryId: number) {
		return this.prisma.category.update({
			where: {
				id: categoryId,
			},
			data: dto,
		})
	}

	async delete(categoryId: number) {
		return this.prisma.$transaction(async prisma => {
			await prisma.product.deleteMany({
				where: {
					categoryId: categoryId,
				},
			})

			return prisma.category.delete({
				where: {
					id: categoryId,
				},
			})
		})
	}
}
