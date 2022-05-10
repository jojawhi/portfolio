import Nav from './components/nav/nav.component';
import Hero from './components/hero/hero.component';
import ProjectSection from './components/project-section/project-section.component';
import './App.scss';

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<Hero />
			<ProjectSection />
		</div>
	);
};

export default App;
