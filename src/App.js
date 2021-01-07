import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResults'
import NameList from './components/NameList'
import Total from './components/Total'
import namesFromJson from './names.json'
import './App.css'


const App = () => {

	const [names, setNames] = useState([])
	const [nameField, setNameField] = useState('')
	const [searchResult, setSearchResult] = useState(null)
	const [sortMode, setSortMode] = useState({ value: 'popular', label: 'Most popular' })
	const sortOptions = [
		{ value: 'popular', label: 'Most popular' },
		{ value: 'alpha', label: 'Alphabetical' }
	]

	useEffect(() => {
		setNames(Object
			.values(namesFromJson)[0]
			.sort((a, b) => b.amount - a.amount))
	}, [])

	const handleSelectChange = selected => {

		if (selected.value === 'popular')
			setNames(names.sort( (a, b) => b.amount - a.amount ))
		else if (selected.value === 'alpha')
			setNames(names.sort( (a, b) => a.name.localeCompare(b.name) ))
		else
			return

		setSortMode(selected)
	}

	const handleSearch = e => {

		e.preventDefault()

		const name = names.find(n => n.name.toLowerCase() === nameField.toLowerCase())
		
		setSearchResult(name ? name : `No results for ${nameField}`)
		setNameField('')
	}

	return (
		<div className='main-container'>

			<h1>Name App</h1>

			<SearchForm nameField={nameField}
				setNameField={setNameField}
				handleClick={handleSearch} />

			{ searchResult && <SearchResult result={searchResult} /> }

			<h2>Sort by</h2>

			<Select options={sortOptions}
				value={sortMode}
				onChange={handleSelectChange} />

			<NameList names={names} />

			<Total amount={names.reduce((s, n) => s + n.amount, 0)} />

		</div>
	)
}

export default App;
