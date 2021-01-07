import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import NameList from './components/NameList'
import namesFromJson from './names.json'
import './App.css'


const App = () => {

	const [names, setNames] = useState([])
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

	return (
		<div className='main-container'>

			<h1>Name App</h1>


			<h2>Sort by</h2>

			<Select options={sortOptions}
				value={sortMode}
				onChange={handleSelectChange} />

			<NameList names={names} />

		</div>
	)
}

export default App;
