'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { Field, Title } from '@/components'
import { authService } from '@/services/auth.service'

export function Auth() {
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
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
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
					<button onClick={() => setIsLoginForm(true)}>Login</button>
				</div>
			</form>
		</div>
	)
}