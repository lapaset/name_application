import React, { useState, useEffect } from 'react'
import './App.css'
import namesFromJson from './names.json'

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
			
			<ul>
				{
					names
						.map(n => <li key={n.name}>
							<span>{n.name}</span>
							<span>{n.amount}</span>
						</li>)
				}
			</ul>
			
		</div>
	)
}

export default App;
