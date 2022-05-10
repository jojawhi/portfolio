import './project-card.styles.scss';
import Tag from '../tag/tag.component';

const ProjectCard = ({ project }) => {
	const { name, description, imageURL, tags } = project;

	return (
		<div className='project-card'>
			<div className='card-text-container'>
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
			<div className='tags-container'>
				{tags.map((tag) => {
					return <Tag label={tag} key={`${tag}${project.name}`} />;
				})}
			</div>
			<img src={imageURL} alt={`${name}`} />
		</div>
	);
};

export default ProjectCard;
