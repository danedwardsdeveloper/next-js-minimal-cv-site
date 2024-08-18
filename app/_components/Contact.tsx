import Link from 'next/link';

import ObfuscatedEmail from './ObfuscatedEmail';
import HorizontalRule from './HorizontalRule';
import Icon from './Icon';

import { copy } from '../_library/copy';

export default function Contact() {
	return (
		<section className="mb-10">
			<HorizontalRule />

			<h2 className="section-heading font-bold uppercase text-theme-primary">
				{copy.contact.sectionTitle}
			</h2>

			<ul className="mt-3">
				{copy.contact.email.display && (
					<li className="mb-3">
						<ObfuscatedEmail />
					</li>
				)}

				{copy.contact.contactItems.map(
					(contactItem, index) =>
						contactItem.display && (
							<li className="mb-3" key={index}>
								<Link
									href={contactItem.value}
									rel="noopener"
									target="_blank"
									title={`Open Dan's ${contactItem.name} in a new window`}
								>
									<div className="flex justify-items-start items-center">
										<Icon
											name="link"
											size={24}
											colour="text-theme-primary"
										/>
										<span className="text-theme-text hover:text-theme-primary hover:scale-105 transition-all duration-300">
											{contactItem.name}
										</span>
									</div>
								</Link>
							</li>
						)
				)}
			</ul>
		</section>
	);
}
