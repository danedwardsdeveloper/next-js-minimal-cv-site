import Link from 'next/link';

import { PortfolioPiece as PortfolioPieceProps } from '../_types/types';

import Icon from './Icon';
import { globalStyles } from '../_library/themes';

export default function PortfolioPiece({
	name,
	githubLink,
	link,
	description,
	details,
}: PortfolioPieceProps) {
	return (
		<div className="mb-10">
			<h3 className="font-bold uppercase mt-3 mb-1">
				<Link
					href={link}
					className="hover-animation hover-animation--purple text-typescript"
					target="_blank"
					rel="noopener noreferrer"
				>
					{name}
				</Link>
				<span className="text-gray-400">&nbsp;|&nbsp;</span>
				<Link
					href={githubLink}
					className=" text-typescript"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
			</h3>
			<p className="mb-4">{description}</p>
			<ul>
				{details.map((detail, index) => (
					<li className={globalStyles.listItemMargin} key={index}>
						<div className="flex justify-items-start">
							<Icon name="arrow" size={32} colour="text-typescript" />
							<span>{detail}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
