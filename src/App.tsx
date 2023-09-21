import './App.css';
import Header from './components/header';
import { useEffect, useState } from 'react';
import People from './components/people';
import StarWarsPeople from './starWarsPeople';

function App(): JSX.Element {

	const [ people, setPeople ] = useState<Array<StarWarsPeople>>([]);

	useEffect(() => {
		const getPeople = async () => {
			const response = await fetch('https://swapi.dev/api/people/1/');
			const json = await response.json() as { data: StarWarsPeople[]};
			setPeople(json.data);
		};
		getPeople();
	},[]);

	return (
		<>
			<Header></Header>

			<main>
				<div className='cards__wrapper'>
					<People people={people}/>
				</div>
			</main>
		</>
	);
}

export default App;
