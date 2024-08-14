import HorizontalRule from './HorizontalRule';

// import { copy } from '../_library/copy';

export default function EducationSection() {
	return (
		<section className="mb-14">
			<HorizontalRule colour="purple-800" />
			<h2 className="section-heading pb-1 section-heading--accent-2 font-bold uppercase text-purple">
				Education
			</h2>
			<ul className="education-list">
				<li className="mb-5">
					<h3 className="font-bold text-purple">Codecademy</h3>
					<p className="italic mb-1">November 2023-Present</p>
					<p>Full-Stack Engineer Career Path</p>
				</li>

				<li className="mb-2">
					<p></p>
					<h3 className="font-bold text-purple">
						Trinity College of Music, London
					</h3>
					<p className="italic mb-1">2010-2014</p>
					<p>Bachelor of Music, Cello</p>
				</li>
			</ul>
		</section>
	);
}
