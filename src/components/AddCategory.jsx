import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')
	const [selectedOption, setSelectedOption] = useState('stickers')

	const handleInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		if (inputValue.trim().length <= 1) return
		onNewCategory(inputValue.trim(), selectedOption)

		setInputValue('')
	}
	return (
		<form onSubmit={onSubmit}>
			<div className="box-input">
				<input
					className="inputSearch"
					type="text"
					placeholder="Buscar Gif"
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button className="search">Buscar</button>

				<div className="radio-group">
					<label>
						<input
							type="radio"
							name="option"
							value="stickers"
							checked={selectedOption === 'stickers'}
							onChange={handleOptionChange}
						/>
						<span>Stickers</span>
					</label>
					<label>
						<input
							type="radio"
							name="option"
							value="gifs"
							checked={selectedOption === 'gifs'}
							onChange={handleOptionChange}
						/>
						<span>GIFS</span>
					</label>
				</div>
			</div>
		</form>
	)
}
