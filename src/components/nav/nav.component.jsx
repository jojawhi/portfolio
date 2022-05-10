import NavLink from '../nav-link/nav-link.component';
import '../nav/nav.styles.scss';

const Nav = () => {
	return (
		<nav className='nav'>
			<NavLink section='#hero' label='HOME'></NavLink>
			<NavLink section='#projects' label='PROJECTS'></NavLink>
			<NavLink section='#about' label='ABOUT'></NavLink>
			<NavLink section='#contact' label='CONTACT'></NavLink>
		</nav>
	);
};

export default Nav;
