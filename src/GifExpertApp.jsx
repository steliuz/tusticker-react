import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		{ name: 'Demon Slayer', type: 'stickers' }
	])

	const removeCategory = (title) => {
		const updateCategories = categories.filter(
			(category) => category.name !== title
		)
		setCategories(updateCategories)
	}

	const onAddCategory = (newCategory, type) => {
		const noSome = categories.find((c) => {
			return (
				c.name.toLowerCase() === newCategory.toLowerCase() && c.type === type
			)
		})
		if (noSome) return
		setCategories([{ name: newCategory, type }, ...categories])
	}

	return (
		<section className='main-container'>
			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid
					key={category.name + category.type}
					category={category.name}
					type={category.type}
					removeCategory={removeCategory}
				/>
			))}
		</section>
	)
}
