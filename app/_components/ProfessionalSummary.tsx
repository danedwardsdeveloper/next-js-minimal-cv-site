'use client';
import { copy } from '../_library/copy';
import HorizontalRule from './HorizontalRule';

export default function ProfessionalSummary() {
	return (
		<section className="section section--small">
			<HorizontalRule colour="blue-800" />
			<h1 className="section-heading pb-1 section-heading--accent-1 font-bold uppercase text-blue-800 text-base font-theme text-theme-text">
				<span className="block lg:inline">{copy.name}</span>
				<span className="hidden lg:inline text-gray-400" aria-hidden="true">
					&nbsp;|&nbsp;
				</span>
				<span className="block lg:inline">{copy.title}</span>
				<span className="sr-only">: </span>
			</h1>
			<p
				className="text-justify text-base"
				style={{
					fontFamily: 'var(--font-family)',
					color: 'var(--color-text)',
					backgroundColor: 'var(--color-background)',
				}}
			>
				{copy.summary}
			</p>
		</section>
	);
}
