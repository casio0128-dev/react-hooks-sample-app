import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Counter() {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	const decrement = () => {
		setCount(count - 1)
	}

  	return (
  	  <div className="App">
			<Link to="/">back</Link>
			<h1>{count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
  	  </div>
  );
}

export default Counter;