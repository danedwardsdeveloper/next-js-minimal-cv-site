import { copy } from '../_library/copy';
import WorkHistoryItem from './WorkHistoryItem';
import HorizontalRule from './HorizontalRule';

import { WorkHistoryItem as WorkHistoryItemProps } from '../_types/types';

export default function WorkHistorySection() {
	return (
		<section>
			<HorizontalRule colour="green-800" />
			<h2 className="section-heading pb-1 font-bold uppercase text-green-800">
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
