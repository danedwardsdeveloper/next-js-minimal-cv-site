import { WorkHistoryItem as WorkHistoryItemProps } from '../types';
import Icon from './Icon';

export default function WorkHistoryItem({
	title,
	company,
	period,
	responsibilities,
}: WorkHistoryItemProps) {
	return (
		<section className="mb-10">
			<h3 className="mt-3 mb-1 font-bold text-theme-primary">{title}</h3>
			<p>{company}</p>
			<p className="italic mb-3">{period}</p>
			<ul>
				{responsibilities.map((responsibility, index) => (
					<li key={index} className="mb-3">
						<div className="flex justify-items-start">
							<Icon name="arrow" size={32} colour="text-theme-primary" />
							<span>{responsibility}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
