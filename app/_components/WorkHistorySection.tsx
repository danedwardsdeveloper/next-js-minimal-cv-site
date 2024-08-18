import WorkHistoryItem from './WorkHistoryItem';
import HorizontalRule from './HorizontalRule';

import { copy } from '../_library/copy';

import { WorkHistoryItem as WorkHistoryItemProps } from '../types';

export default function WorkHistorySection() {
	return (
		<section>
			<HorizontalRule />
			<h2 className="pb-1 font-bold uppercase text-theme-primary">
				Work history
			</h2>
			{copy.workHistory.map(
				(workHistoryItem: WorkHistoryItemProps, index: number) => (
					<WorkHistoryItem
						key={index}
						title={workHistoryItem.title}
						company={workHistoryItem.company}
						period={workHistoryItem.period}
						responsibilities={workHistoryItem.responsibilities}
					/>
				)
			)}
		</section>
	);
}
