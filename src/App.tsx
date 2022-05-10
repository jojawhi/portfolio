import Nav from './components/nav/nav.component';
import Hero from './components/hero/hero.component';
import Section from './components/section/section.component';
import './App.scss';

const App = () => {
	return (
		<div className='App'>
			<Nav></Nav>
			<Hero></Hero>
			<Section heading='Portfolio' id='portfolio'></Section>
			<Section heading='About' id='about'></Section>
			<Section heading='Contact' id='contact'></Section>
		</div>
	);
};

export default App;
