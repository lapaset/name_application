import React, { useState, useEffect } from 'react'
import NameList from './components/NameList'
import namesFromJson from './names.json'
import './App.css'


const App = () => {

	const [names, setNames] = useState([])

	useEffect(() => {
		setNames(Object
			.values(namesFromJson)[0]
			.sort((a, b) => b.amount - a.amount))
	}, [])

	return (
		<div className='main-container'>

			<h1>Name App</h1>
			
			<NameList names={names} />

		</div>
	)
}

export default App;
