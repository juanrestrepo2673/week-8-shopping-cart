import { ChangeEvent } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'

export function Filters() {

	const { filters, setFilters } = useFilters()

	const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {

		setFilters((prevState) => (
			{
				...prevState,
				minPrice: event.target.valueAsNumber
			}
		))
	}

	const handleDescriptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setFilters((prevState) => (
			{
				...prevState,
				category: event.target.value
			}
		))
	}

	const handleSearchProducts = (event: ChangeEvent<HTMLSelectElement>) => {
		setFilters((prevState) => (
			{
				...prevState,
				title: event.target.value
			}
		))
	}


	return (
		<section className="filters">

			<div>
				<label htmlFor="price" >Price starting at: </label>
				<input
					type="range"
					id="price"
					onChange={handleChangeMinPrice}
					min="0"
					max="1000"
				/>
				<span> ${filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor="search" > Search</label>
				<input 
					id="search" 
					onChange={handleSearchProducts}
				/>
			</div>

			<div>
				<label htmlFor="category" > Category</label>
				<select id="category" onChange={handleDescriptionChange}>
					<option value=''>All Products</option>
					<option value='jewelery'>jewelery</option>
					<option value='electronics'>electronics</option>
				</select>
			</div>

		</section>
	)
}