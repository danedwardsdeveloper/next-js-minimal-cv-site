import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SkillListProps {
	title: string;
	skills: string[];
	colour: string;
}

export default function SkillList({ title, skills, colour }: SkillListProps) {
	return (
		<section className="mb-14">
			<h2 className={`pb-1 font-bold uppercase text-${colour}`}>{title}</h2>
			<ul>
				{skills.map((skill, index) => (
					<li key={index} className={`mb-2`}>
						<div className="flex justify-items-start">
							<CheckCircleIcon className="size-6 flex-shrink-0 text-purple-800 mr-2" />
							<span>{skill}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
