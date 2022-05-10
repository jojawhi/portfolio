import '../section/section.styles.scss';

const Section = ({ heading, id }) => {
	return (
		<section className='section' id={id}>
			<h1 className='section-heading'>{heading}</h1>
		</section>
	);
};

export default Section;
