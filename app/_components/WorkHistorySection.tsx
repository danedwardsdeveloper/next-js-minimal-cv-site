import { copy } from '../_library/copy';
import WorkHistoryItem from './WorkHistoryItem';
import HorizontalRule from './HorizontalRule';

import { WorkHistoryItem as WorkHistoryItemProps } from '../_types/types';

export default function WorkHistorySection() {
	return (
		<section>
			<HorizontalRule colour="typescript" />
			<h2 className="pb-1 font-bold uppercase text-typescript">
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
