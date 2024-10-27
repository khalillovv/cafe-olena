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
import { useUpdateCategories } from '@/hooks/useCategories'
import { ICategoryForm } from '@/types/category.types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Title } from '../title'

interface Props {
	open: boolean
	onClose: () => void
	initialData: { id: number; name: string; menuId: number }
}

export const EditCategoryModal: React.FC<Props> = ({
	open,
	onClose,
	initialData,
}) => {
	const { register, handleSubmit, formState, reset, setValue } =
		useForm<ICategoryForm>({
			mode: 'onChange',
			defaultValues: {
				name: initialData.name,
				menuId: initialData.menuId,
			},
		})
	const { updateCategories } = useUpdateCategories()
	const { menu } = useMenuData()

	const handleClose = () => {
		reset()
		onClose()
	}

	const onSubmit: SubmitHandler<ICategoryForm> = data => {
		updateCategories({ id: initialData.id, data })
		reset()
		handleClose()
	}

	const nameError = formState.errors['name']?.message
	const menuIdError = formState.errors['menuId']?.message

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader className='flex flex-row gap-2 items-center'>
					<Title title='Редагувати категорію' />
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
									defaultValue={initialData.menuId.toString()}
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
