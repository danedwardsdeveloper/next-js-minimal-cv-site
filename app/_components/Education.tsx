import HorizontalRule from './HorizontalRule';

import { copy } from '../_library/copy';

export default function EducationSection() {
	return (
		<section className="mb-14">
			<HorizontalRule />
			<h2 className="mb-3 font-bold uppercase text-theme-primary">
				{copy.education.sectionTitle}
			</h2>
			<ul className="">
				{copy.education.educationItems.map((educationItem, index) => (
					<li className="mb-7" key={index}>
						<h3 className="font-bold text-theme-primary">
							{educationItem.institution}
						</h3>
						<p className="italic">{educationItem.period}</p>
						<p>{educationItem.course}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
