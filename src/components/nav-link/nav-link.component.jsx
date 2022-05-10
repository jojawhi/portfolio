import '../nav-link/nav-link.styles.scss';

const NavLink = (props) => {
	const { section, label } = props;

	return (
		<a href={section} className='nav-link'>
			{label}
		</a>
	);
};

export default NavLink;
