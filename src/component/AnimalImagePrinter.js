import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
	switch(action.type) {
	case 'dog':
		return {
			image: action.data.message,
			loading: action.loading
		}
	case 'cat':
		return {
			image: action.data.file,
			loading: action.loading
		}
	case 'fox':
		return {
			image: action.data.image,
			loading: action.loading
		}
	default:
		return {
			image: "",
			loading: action.loading
		}
	}
}

const animals = ["dog", "cat", "fox"]
const apis = [
	"https://dog.ceo/api/breeds/image/random",
	"https://aws.random.cat/meow",
	"https://randomfox.ca/floof/"
]

/**
 * getRandomSelectForOne(Array)
 * @return [index: int, apiPath: string]
 */
function getRandomSelectForOne(array) {
	const index = Math.floor(Math.random() * Math.floor(array.length))	
	return [index, array[index]];
}

/**
 * AnimalImagePrinter
 * 5秒おきに、「犬」、「猫」、「狐」の画像を表示します
 */
const AnimalImagePrinter = () => {
	const [animal, dispatch] = useReducer(reducer, {image: '', loading: true})

	useEffect(()=>{
		let tim = setInterval(()=>{
			const [index, apiPath] = getRandomSelectForOne(apis)

			axios.get(apiPath).then(res => {
				dispatch({
					type: animals[index],
					data: res.data,
					loading: false
				})
			})
			dispatch({type: "", data: null, loading: true})
		}, 5000)

		return () => {
			clearInterval(tim)
		}
	}, [])
	
	return (
		<>
			{	animal.loading ?<h1>Loading...</h1>:
				<>
					<h1>{animal.image}</h1>
					<img src={animal.image} widh="400" height="400" />
				</>
			}
		</>
	)
}

export default AnimalImagePrinter;