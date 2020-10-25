import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './component/Navigation';
import Counter from './component/Counter';
import Timer from './component/Timer';
import AnimalImagePrinter from './component/AnimalImagePrinter';

function App() {
	return (
		<>
			<BrowserRouter>
				<Route exact path="/" component={Navigation} />
				<Route path="/Counter" component={Counter} />
				<Route path="/Timer" component={Timer} />
				<Route path="/AnimalImagePrinter" component={AnimalImagePrinter} />
			</BrowserRouter>
		</>
	)
}

export default App;
