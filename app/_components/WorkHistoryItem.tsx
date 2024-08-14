import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import { WorkHistoryItem as WorkHistoryItemProps } from '../_types/types';

export default function WorkHistoryItem({
	title,
	company,
	period,
	responsibilities,
}: WorkHistoryItemProps) {
	return (
		<section className="work-history-item">
			<h3 className={`mt-3 mb-1 font-bold text-green-800`}>{title}</h3>
			<p>{company}</p>
			<p className="italic mb-1">{period}</p>
			<ul className="bullet-list">
				{responsibilities.map((responsibility, index) => (
					<li key={index}>
						<div className="flex justify-items-start">
							<ArrowRightCircleIcon className="size-6 flex-shrink-0 text-green-800 mr-2" />
							<span>{responsibility}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
