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
import { useCreateCategories } from '@/hooks/useCategories'
import { ICategoryForm } from '@/types/category.types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Title } from '../title'

interface Props {
	open: boolean
	onClose: () => void
}

export const AddCategoryModal: React.FC<Props> = ({ open, onClose }) => {
	const { register, handleSubmit, formState, reset, setValue } =
		useForm<ICategoryForm>({
			mode: 'onChange',
		})
	const { createCategories } = useCreateCategories()
	const { menu } = useMenuData()

	const handleClose = () => {
		onClose()
	}

	const onSubmit: SubmitHandler<ICategoryForm> = data => {
		createCategories(data)
		reset()
	}

	const nameError = formState.errors['name']?.message
	const menuIdError = formState.errors['menuId']?.message

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader className='flex flex-row gap-2 items-center'>
					<Title title='Додати категорію' />
				</DialogHeader>
				<div className='p-4'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							id='categories'
							label='Назва категорії:'
							error={nameError}
							placeholder='Введіть назву:'
							type='text'
							{...register('name', {
								required: '* Поле обов’язкове',
							})}
						/>
						<div className='flex flex-row gap-2 mt-3'>
							<div className='w-48'>
								<Select
									onValueChange={value => setValue('menuId', Number(value))}
								>
									<SelectTrigger>
										<SelectValue placeholder='Виберіть меню:' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Список меню</SelectLabel>
											{menu?.map(item => (
												<SelectItem key={item.id} value={`${item.id}`}>
													{item.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
								<input
									type='hidden'
									{...register('menuId', {
										required: '⁎',
									})}
								/>
							</div>
							{menuIdError && <p className='text-sm text-red'>{menuIdError}</p>}
						</div>
						<Button className='mt-4' variant={'outline'} type='submit'>
							Створити
						</Button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}
