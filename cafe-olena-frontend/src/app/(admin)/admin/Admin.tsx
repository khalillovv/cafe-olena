'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { Field, Title } from '@/components'
import { authService } from '@/services/auth.service'

export function Admin() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='mt-16'>
			<form
				className='w-96 m-auto shadow rounded-xl p-[48px] bg-gray'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Title title='Auth' />

				<Field
					id='name'
					label='Name:'
					placeholder='Enter Name:'
					type='Name'
					extra='mb-4'
					{...register('name', {
						required: 'Email is required!',
					})}
				/>

				<Field
					id='password'
					label='Password: '
					placeholder='Enter password: '
					type='password'
					{...register('password', {
						required: 'Password is required!',
					})}
					extra='mb-6'
				/>

				<div className='flex items-center gap-5 justify-center'>
					<button
						className='border p-3 bg-white rounded-2xl w-6/12 transition-color duration-700 hover:border-primary'
						onClick={() => setIsLoginForm(true)}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}
