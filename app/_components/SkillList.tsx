import Icon from './Icon';

interface SkillListProps {
	title: string;
	skills: string[];
}

export default function SkillList({ title, skills }: SkillListProps) {
	return (
		<section className="mb-14">
			<h2 className="mb-3 font-bold uppercase text-theme-primary">
				{title}
			</h2>

			<ul>
				{skills.map((skill, index) => (
					<li key={index} className="mb-3">
						<div className="flex justify-items-start">
							<Icon name="checkCircle" colour="text-theme-primary" />
							<span>{skill}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
