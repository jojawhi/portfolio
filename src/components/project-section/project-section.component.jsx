import './project-section.styles.scss';
import ProjectCard from '../project-card/project-card.component';
import PROJECTS from '../../data.json';

const ProjectSection = () => {
	const projects = PROJECTS;

	return (
		<section id='projects' className='section'>
			<h1>Projects</h1>
			<div className='projects-container'>
				{projects.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							project={project}
						></ProjectCard>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectSection;
