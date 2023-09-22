import './App.css';
import Header from './components/header';
import { useEffect, useState } from 'react';

function App(): JSX.Element {

	const [ peopleName, setPeopleName ] = useState("");


	useEffect(() => {
		const getPerson = async () => {
			const response = await fetch('https://swapi.dev/api/people/1/');
			const json = await response.json();
			setPeopleName(json.name);
		};
		getPerson();
	},[]);

	return (
		<>
			<Header></Header>

			<main>
				<div className='cards__wrapper'>
				<h2>Star Wars person: {peopleName} </h2>
				</div>
			</main>
		</>
	);
}

export default App;
