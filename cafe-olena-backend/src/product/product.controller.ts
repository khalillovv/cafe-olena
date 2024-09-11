import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProductDto } from './dto/product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	async getAll() {
		return this.productService.getAll()
	}

	@Post()
	@HttpCode(200)
	@Auth()
	async create(@Body() dto: ProductDto) {
		return this.productService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(
		//TODO: Проверить будет ли правильно обновляться, будут ли оставаться остальные поля при обновлении
		@Body() dto: Partial<ProductDto>,
		@Param('id', ParseIntPipe) id: number
	) {
		return this.productService.update(dto, id)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth()
	async delete(@Param('id', ParseIntPipe) id: number) {
		return this.productService.delete(id)
	}
}
