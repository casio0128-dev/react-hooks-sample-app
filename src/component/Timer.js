import React, { useState, useEffect } from 'react'

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
		<h1>time: {count}</h1>
	)
}

export default Timer;