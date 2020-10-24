import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'

/**
 * レデューサー
 * 
 * state: {
 * 	kind: 動物種類
 *  image: 動物の画像URL
 *  loading: ローディングの表示有無（true: 表示／false: 非表示）
 * }
 * 
 * action: {
 * 	type: 動物種類
 * 	data: レスポンスのデータ
 * 	loading: ローディングの表示有無（true: 表示／false: 非表示）
 * }
*/
const reducer = (state, action) => {
	switch(action.type) {
	case 'dog':
		return {
			kind: action.type,
			image: action.data.message,
			loading: action.loading
		}
	case 'cat':
		return {
			kind: action.type,
			image: action.data.file,
			loading: action.loading
		}
	case 'fox':
		return {
			kind: action.type,
			image: action.data.image,
			loading: action.loading
		}
	default:
		return {
			kind: action.type,
			image: "",
			loading: action.loading
		}
	}
}

const animalApiMap = {
	"dog": ["https://dog.ceo/api/breeds/image/random"],
	"cat": ["https://aws.random.cat/meow"],
	"fox": ["https://randomfox.ca/floof/"]
}

/**
 * getRandomSelectForOne(Array)
 * @return [index: int, value: string]
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
	const initState = {
		kind: '',
		image: '',
		loading: true
	}
	const [animal, dispatch] = useReducer(reducer, initState)
	const [duration, setDuration] = useState(5000)
	const [durationUnSettled, setDurationUnSetteled] = useState(5000)

	useEffect(()=>{
		let tim = setInterval(()=>{
			const animalApiMapKeys = Object.keys(animalApiMap)
			const [, animalKind] = getRandomSelectForOne(animalApiMapKeys)
			const [, apiPath] = getRandomSelectForOne(animalApiMap[animalKind])

			axios.get(apiPath).then(res => {
				dispatch({
					type: animalKind,
					data: res.data,
					loading: false
				})
			})
			dispatch({type: "", data: null, loading: true})
		}, duration)

		return () => {
			clearInterval(tim)
		}
	}, [duration])
	
	return (
		<>
			<span>
				<p>今の表示間隔は、「{duration}」です</p>
				<input value={durationUnSettled} onChange={e=> {setDurationUnSetteled(e.target.value)}} />
				<button onClick={()=>{
					if (durationUnSettled < 2000) {
						setDuration(2000)
						setDurationUnSetteled(2000)
					} else {
						setDuration(durationUnSettled)
					}
				}}>決定</button>
			</span>
			{	animal.loading ?<h1>Loading...</h1>:
				<>
					<h1>{animal.kind}</h1>
					<img src={animal.image} widh="400" height="400" />
				</>
			}
		</>
	)
}

export default AnimalImagePrinter;