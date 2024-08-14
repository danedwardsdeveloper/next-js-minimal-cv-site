import Link from 'next/link';
import HorizontalRule from './HorizontalRule';

export default function Contact() {
	return (
		<section className="mb-10">
			<HorizontalRule colour="green-800" />
			<h2 className="section-heading pb-1 font-bold uppercase text-green-800">
				Contact
			</h2>
			<ul className="bullet-list link-list">
				<li className="mb-1-5 angle-bullet angle-bullet--green">
					<Link
						href="#"
						className="hover-animation hover-animation--green"
						id="email-link"
					>
						Email
					</Link>
				</li>
			</ul>
		</section>
	);
}
