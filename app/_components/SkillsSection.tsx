import HorizontalRule from './HorizontalRule';
import SkillList from './SkillList';

import { copy } from '../_library/copy';

export default function SkillsSection() {
	return (
		<>
			<HorizontalRule />
			{Object.entries(copy.skills).map(([title, skills]) => (
				<SkillList key={title} title={title} skills={skills} />
			))}
		</>
	);
}
