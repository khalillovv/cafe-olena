'use client'
import { useMenuData } from '@/hooks'
import { useUpdateMenu } from '@/hooks/useMenu'
import { ArrowBigLeft, Check, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DeleteButton } from './delete-button'

interface Props {
	className?: string
}

interface EditFormValues {
	name: string
}

export const MenuSettingsMenu: React.FC<Props> = ({ className }) => {
	const { menu, deleteMenu } = useMenuData()
	const { updateMenu } = useUpdateMenu()
	const { register, handleSubmit, reset } = useForm<EditFormValues>()
	const [editingId, setEditingId] = useState<number | null>(null)

	const handleEdit = (id: number, name: string) => {
		setEditingId(id)
		reset({ name })
	}

	const onSubmit = async (data: EditFormValues) => {
		if (editingId !== null) {
			await updateMenu({ id: editingId, data: { name: data.name } })
			setEditingId(null)
		}
	}

	return (
		<div className={className}>
			<p className='mb-2 text-3xl'>Меню</p>
			{menu?.map(item => (
				<div key={item.id} className='flex flex-row items-center mb-1'>
					{editingId === item.id ? (
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex items-center'
						>
							<button
								type='submit'
								className='bg-green-600 text-white rounded hover:opacity-95'
							>
								<Check width={24} height={24} />
							</button>
							<button
								type='button'
								onClick={() => setEditingId(null)}
								className='mx-2 bg-grayDark text-white rounded'
							>
								<ArrowBigLeft />
							</button>
							<input
								{...register('name')}
								className='border border-gray-300 p-1'
								defaultValue={item.name}
							/>
						</form>
					) : (
						<>
							<SquarePen
								className='mr-2 cursor-pointer transition-colors hover:text-primary'
								onClick={() => handleEdit(item.id, item.name)}
							/>
							<span>{item.name}</span>
						</>
					)}
					<DeleteButton
						name={`Ви дійсно хочете видалити "${item.name}"`}
						onConfirm={() => deleteMenu(item.id)}
						className='ml-2'
					/>
				</div>
			))}
		</div>
	)
}
