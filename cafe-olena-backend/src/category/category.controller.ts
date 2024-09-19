import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	async getAll() {
		return this.categoryService.getAll()
	}

	@Post()
	@HttpCode(200)
	@Auth()
	async create(@Body() dto: CategoryDto) {
		return this.categoryService.create(dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth()
	async delete(@Param('id', ParseIntPipe) id: number) {
		return this.categoryService.delete(id)
	}
}
