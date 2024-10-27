import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	Field,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui'
import { useMenuData } from '@/hooks'
import { useUpdateProduct } from '@/hooks/useProduct'
import { IProductForm } from '@/types/product.types'
import { GlassWater, Scale } from 'lucide-react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Title } from '../title'

interface Props {
	open: boolean
	onClose: () => void
	initialData: {
		id: number
		name: string
		price: string
		ingredients?: string
		grams?: string
		gramsType?: string
		categoryId: number
	}
}

export const EditProductModal: React.FC<Props> = ({
	open,
	onClose,
	initialData,
}) => {
	const { register, handleSubmit, formState, reset, setValue } =
		useForm<IProductForm>({
			mode: 'onChange',
			defaultValues: {
				name: initialData.name,
				price: initialData.price,
				ingredients: initialData.ingredients,
				grams: initialData.grams,
				gramsType: initialData.gramsType,
				categoryId: initialData.categoryId,
			},
		})
	const { updateProduct } = useUpdateProduct()
	const { categories } = useMenuData()

	const handleClose = () => {
		reset()
		onClose()
	}

	const onSubmit: SubmitHandler<IProductForm> = data => {
		updateProduct({ id: initialData.id, data })
		reset()
		handleClose()
	}

	const nameError = formState.errors['name']?.message
	const priceError = formState.errors['price']?.message
	const categoryIdError = formState.errors['categoryId']?.message

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader className='flex flex-row gap-2 items-center'>
					<Title title='Редагувати позицію' />
				</DialogHeader>
				<div className='p-4'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							id='product'
							label='Назва позиції:'
							error={nameError}
							placeholder='Введіть назву:'
							type='text'
							{...register('name', {
								required: '* Поле обов’язкове',
							})}
						/>
						<Field
							id='product'
							label='Ціна:'
							placeholder='Введіть ціну:'
							error={priceError}
							type='text'
							{...register('price', {
								required: '* Поле обов’язкове',
							})}
						/>
						<Field
							id='product'
							label='Інгредієнти:'
							placeholder='Введіть інгредієнти:'
							type='text'
							{...register('ingredients')}
						/>
						<div className='flex flex-row gap-2'>
							<Field
								id='product'
								label='Грами:'
								placeholder='Введіть грами:'
								type='text'
								{...register('grams')}
							/>
							<div className='mt-8'>
								<Select
									onValueChange={value => setValue('gramsType', value)}
									defaultValue={initialData.gramsType}
								>
									<SelectTrigger>
										<SelectValue placeholder='Виберіть іконку:' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Список іконок</SelectLabel>

											<SelectItem value='gram'>
												<span className='flex flex-row gap-1'>
													<Scale width={16} height={16} /> грами
												</span>
											</SelectItem>
											<SelectItem value='liter'>
												<span className='flex flex-row gap-1'>
													<GlassWater width={16} height={16} /> літри
												</span>
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<input type='hidden' {...register('gramsType')} />
							</div>
						</div>

						<div className='flex flex-row gap-2 mt-4'>
							<div className='w-80'>
								<Select
									onValueChange={value => setValue('categoryId', Number(value))}
									defaultValue={initialData.categoryId.toString()}
								>
									<SelectTrigger>
										<SelectValue placeholder='Виберіть категорію:' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Список категорій</SelectLabel>
											{categories?.map(item => (
												<SelectItem key={item.id} value={`${item.id}`}>
													{item.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
								<input
									type='hidden'
									{...register('categoryId', {
										required: '⁎',
									})}
								/>
							</div>
							{categoryIdError && (
								<p className='text-[15px] text-red'>{categoryIdError}</p>
							)}
						</div>
						<div className='flex flex-row gap-4 mt-4'>
							<Button variant={'outline'} type='submit'>
								Зберегти
							</Button>
							<Button onClick={handleClose}>Назад</Button>
						</div>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}
