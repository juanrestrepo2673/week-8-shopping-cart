import { IFilters } from '@/types/filters'
import React, { createContext, useState } from 'react'


const initialFilters = {
	minPrice: 0,
	category: '',
	title: ''
}

export const FilterContext = createContext({
	filters: initialFilters,
	setFilters: React.Dispatch<React.SetStateAction<IFilters>>
}
)

interface FiltersProviderProps {
	children: React.ReactNode
}

export function FiltersProvider({ children }: FiltersProviderProps) {

	const [filters, setFilters] = useState(initialFilters)

	return (
		<FilterContext.Provider value={
			{
				filters,
				setFilters
			}
		}>
			{children}
		</FilterContext.Provider >
	)
}