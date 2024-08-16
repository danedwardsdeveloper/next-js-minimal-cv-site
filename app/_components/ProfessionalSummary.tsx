import HorizontalRule from './HorizontalRule';

import { copy } from '../_library/copy';

export default function ProfessionalSummary() {
	return (
		<section className="mt-8 md:mt-28 mb-12">
			<HorizontalRule colour="typescript" />
			<h1 className=" font-bold uppercase text-typescript text-base">
				<span className="block lg:inline">{copy.name}</span>
				<span className="hidden lg:inline text-gray-400" aria-hidden="true">
					&nbsp;|&nbsp;
				</span>
				<span className="block lg:inline">{copy.title}</span>
				<span className="sr-only">: </span>
			</h1>
			<p className="text-justify text-base">{copy.summary}</p>
		</section>
	);
}
