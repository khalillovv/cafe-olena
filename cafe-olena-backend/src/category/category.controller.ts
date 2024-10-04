import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Post,
	Query,
} from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	async getAll(@Query('menuId') menuId?: number) {
		return this.categoryService.getAll(menuId ? Number(menuId) : undefined)
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
