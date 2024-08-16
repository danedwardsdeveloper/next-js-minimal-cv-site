import Link from 'next/link';

import HorizontalRule from './HorizontalRule';
import Icon from './Icon';

import { copy } from '../_library/copy';
import { globalStyles } from '../_library/themes';

export default function Contact() {
	return (
		<section className="mb-10">
			<HorizontalRule colour="typescript" />
			<h2 className="section-heading pb-1 font-bold uppercase text-typescript">
				{copy.contact.sectionTitle}
			</h2>
			<ul className="">
				{copy.contact.contactItems.map(
					(contactItem, index) =>
						contactItem.display && (
							<li className={globalStyles.listItemMargin} key={index}>
								<Link href={contactItem.value}>
									<div className="flex justify-items-start items-center">
										<Icon
											name="arrow"
											size={32}
											colour="text-typescript"
										/>
										<span>{contactItem.name}</span>
									</div>
								</Link>
							</li>
						)
				)}
			</ul>
		</section>
	);
}
