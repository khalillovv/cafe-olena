import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import React from 'react'
import { DialogAlert } from './dialog-alert'

interface Props {
	name?: string
	onConfirm: () => void
	className?: string
}

export const DeleteButton: React.FC<Props> = ({
	name,
	onConfirm,
	className,
}) => {
	return (
		<>
			<DialogAlert
				title={name}
				confirm={() => onConfirm()}
				trigger={
					<X
						className={cn(
							'text-red hover:bg-red/10 rounded-full transition-colors cursor-pointer',
							className
						)}
						width={24}
						height={24}
					/>
				}
			/>
		</>
	)
}
