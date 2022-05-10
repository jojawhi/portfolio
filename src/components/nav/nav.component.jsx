import NavLink from '../nav-link/nav-link.component';
import '../nav/nav.styles.scss';

const Nav = () => {
	return (
		<nav className='nav'>
			<NavLink section='#hero' label='Home'></NavLink>
			<NavLink section='#portfolio' label='Portfolio'></NavLink>
			<NavLink section='#about' label='About'></NavLink>
			<NavLink section='#contact' label='Contact'></NavLink>
		</nav>
	);
};

export default Nav;
