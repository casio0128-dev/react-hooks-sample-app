import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
	return (
		<>
			<ul>
				<li><Link to="Counter">Counter</Link></li>
				<li><Link to="Timer">Timer</Link></li>
				<li><Link to="AnimalImagePrinter">AnimalImagePrinter</Link></li>
			</ul>
		</>
	)	
}

export default Navigation