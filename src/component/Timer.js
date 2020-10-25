import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Timer() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let tim = setInterval(()=>{
			setCount(count + 1)
		}, 1000)
		
		return () => {
			clearInterval(tim);
		}
	})

	return (
		<>
			<Link to="/">back</Link>
			<h1>time: {count}</h1>
		</>
	)
}

export default Timer;