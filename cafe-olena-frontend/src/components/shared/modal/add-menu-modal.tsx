import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	Field,
} from '@/components/ui'
import { useCreateMenu } from '@/hooks/useMenu'
import { IMenuForm } from '@/types/menu.types'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Title } from '../title'

interface Props {
	open: boolean
	onClose: () => void
}

export const AddMenuModal: React.FC<Props> = ({ open, onClose }) => {
	const { register, handleSubmit, formState, reset } = useForm<IMenuForm>({
		mode: 'onChange',
	})
	const { createMenu } = useCreateMenu()

	const handleClose = () => {
		onClose()
	}

	const onSubmit: SubmitHandler<IMenuForm> = data => {
		createMenu(data)
		reset()
		handleClose()
	}

	const nameError = formState.errors['name']?.message

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader className='flex flex-row gap-2 items-center'>
					<Title title='Додати меню' />
				</DialogHeader>
				<div className='p-4'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							id='menu'
							label='Назва меню:'
							error={nameError}
							placeholder='Введіть назву:'
							type='text'
							{...register('name', {
								required: '* Поле обов’язкове',
							})}
						/>
						<Button className='mt-4' variant={'outline'}>
							Створити
						</Button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}
