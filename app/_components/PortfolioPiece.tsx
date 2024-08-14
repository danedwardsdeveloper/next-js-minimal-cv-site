import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import { PortfolioPiece as PortfolioPieceProps } from '../_types/types';

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
					className="hover-animation hover-animation--purple text-purple-800"
					target="_blank"
					rel="noopener noreferrer"
				>
					{name}
				</Link>
				<span className="text-gray-400">&nbsp;|&nbsp;</span>
				<Link
					href={githubLink}
					className="hover-animation hover-animation--purple text-purple"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
			</h3>
			<p className="mb-4">{description}</p>
			<ul>
				{details.map((detail, index) => (
					<li className="mb-2" key={index}>
						<div className="flex justify-items-start">
							<ArrowRightCircleIcon
								className={`size-6 flex-shrink-0 text-purple-800 mr-2`}
							/>
							<span>{detail}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
