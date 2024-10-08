'use client'
import { cn } from '@/lib/utils'
import { LinkIcon, MapPinnedIcon, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Container } from './container'
import styles from './footer.module.scss'
import { InformationBlock } from './information-block'
import { Title } from './title'

interface Props {
	className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
	const pathname = usePathname()
	const isSearchPage = pathname === '/search'

	if (isSearchPage) {
		return null
	}

	return (
		<footer className={cn(styles.footer, className)}>
			<Container className={styles.container}>
				<div className='w-[50%] max-md:w-full'>
					<Title
						className='text-[16px] leading-[24px] font-bold mb-2'
						title='Контактні дані'
					/>
					<div className='md:max-w-[372px] flex flex-col max-md:hidden'>
						<a
							target='_blank'
							className='mb-2 transition-all hover:text-primary'
							href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
						>
							проспект Добровольського, 129,б, Одеса, Одеська область, 65000
						</a>
						<a
							target='_blank'
							className='mb-2 transition-all hover:text-primary'
							href='tel:+380984027902'
						>
							+380984027902
						</a>
					</div>
					<div className='hidden flex-col max-md:flex'>
						<InformationBlock
							icon={MapPinnedIcon}
							text='проспект Добровольського, 129,б, Одеса, Одеська область, 65000'
							href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
						/>
						<InformationBlock
							className='max-md:items-center'
							icon={Phone}
							text='+380984027902'
							href='tel:+380984027902'
						/>
					</div>
				</div>
				<div className='w-[50%] max-md:w-full'>
					<Title
						className='text-[16px] leading-[24px] font-bold mb-2'
						title='На карті'
					/>
					<iframe
						className={styles.map}
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d342.75480408862666!2d30.789933!3d46.5864776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6250e56501987%3A0xe68393bee2647e88!2z0JHQsNGAINCV0LvQtdC90LA!5e0!3m2!1sru!2sua!4v1726406116117!5m2!1sru!2sua'
						width='100%'
						height='200'
						style={{ border: 0, marginBottom: 16 }}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
					<button className='border border-border p-3 rounded-lg transition-all hover:border-primary'>
						<a
							className='flex items-center gap-2 font-semibold'
							target='_blank'
							href='https://maps.app.goo.gl/Z9f61yd9upu8JCcr6'
						>
							<LinkIcon />
							<p>Отримати розташування</p>
						</a>
					</button>
				</div>
			</Container>
			<div className='border border-border py-5'>
				<Container>
					<p className='text-[12px] ml-2.5'>
						&copy; {new Date().getFullYear()} Кафе-Бар Олена
					</p>
				</Container>
			</div>
		</footer>
	)
}
