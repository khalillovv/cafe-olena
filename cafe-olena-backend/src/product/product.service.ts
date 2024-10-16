import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ProductDto } from './dto/product.dto'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.product.findMany({
			orderBy: {
				id: 'asc',
			},
		})
	}

	async search(value: string) {
		const products = await this.prisma.product.findMany({
			orderBy: {
				id: 'asc',
			},
		})

		const filteredProducts = products.filter(product =>
			product.name.toLowerCase().includes(value.toLowerCase())
		)

		return filteredProducts
	}

	async create(dto: ProductDto) {
		return this.prisma.product.create({
			data: dto,
		})
	}

	async update(dto: Partial<ProductDto>, productId: number) {
		return this.prisma.product.update({
			where: {
				id: productId,
			},
			data: dto,
		})
	}

	async delete(productId: number) {
		return this.prisma.product.delete({
			where: {
				id: productId,
			},
		})
	}
}
