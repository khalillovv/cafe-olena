import { cn } from '@/lib/utils'
import { XCircle } from 'lucide-react'
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
					<XCircle
						className={cn(
							'text-red hover:opacity-80 cursor-pointer',
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
