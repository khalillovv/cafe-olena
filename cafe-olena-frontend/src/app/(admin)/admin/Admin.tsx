'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IAuthForm } from '@/types/auth.types'

import { Field, Title } from '@/components'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { useState } from 'react'

export function Admin() {
	const { register, handleSubmit, formState } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const [authError, setAuthError] = useState<string | null>(null)

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main(data),
		onSuccess() {
			push(DASHBOARD_PAGES.HOME)
			toast.success('Вхід успішний')
		},
		onError(error: any) {
			if (error.response?.data?.message) {
				setAuthError(`Неправильне ім’я або пароль`)
			} else {
				setAuthError('Произошла ошибка при входе в систему')
			}
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		setAuthError(null)
		mutate(data)
	}

	const nameError = formState.errors['name']?.message
	const passwordError = formState.errors['password']?.message
	const passwordMinLengthError =
		formState.errors['password']?.type === 'minLength'

	return (
		<div className='mt-16'>
			<form
				className='w-96 m-auto shadow rounded-xl p-[48px] bg-gray'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Title title='Auth' />
				<div className='min-h-[26px]'>
					{authError && <p className='text-red mb-4'>{authError}</p>}
				</div>

				<Field
					id='name'
					label='Name:'
					placeholder='Enter Name:'
					type='text'
					{...register('name', {
						required: 'Поле обов’язкове!',
					})}
				/>
				<div className='min-h-[24px]'>
					{nameError && <p className='m-0 text-red'>{nameError}</p>}
				</div>

				<Field
					id='password'
					label='Password: '
					placeholder='Enter password: '
					type='password'
					{...register('password', {
						required: 'Поле обов’язкове!',
						minLength: {
							value: 6,
							message: 'Пароль повинен містити щонайменше 6 символів',
						},
					})}
				/>
				<div className='min-h-[48px]'>
					{passwordMinLengthError ? (
						<p className='m-0 text-red'>
							Пароль должен содержать минимум 6 символов
						</p>
					) : (
						passwordError && <p className='m-0 text-red'>{passwordError}</p>
					)}
				</div>

				<div className='flex items-center justify-center'>
					<button className='border p-3 bg-white rounded-2xl w-6/12 transition-color duration-700 hover:border-primary'>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}
