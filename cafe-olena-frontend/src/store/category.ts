import { create } from 'zustand'

interface CategoryStore {
	activeId: number
	setActiveId: (id: number) => void
	categoryRefs: Record<number, React.RefObject<HTMLDivElement>>
	registerCategoryRef: (
		id: number,
		ref: React.RefObject<HTMLDivElement>
	) => void
	scrollToCategory: (id: number) => void
}

export const useCategoryStore = create<CategoryStore>((set, get) => ({
	activeId: 0,
	setActiveId: id => set({ activeId: id }),
	categoryRefs: {},
	registerCategoryRef: (id, ref) => {
		set(state => ({
			categoryRefs: { ...state.categoryRefs, [id]: ref },
		}))
	},
	scrollToCategory: id => {
		const ref = get().categoryRefs[id]
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	},
}))
