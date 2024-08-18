import Link from 'next/link';

import { PortfolioPiece as PortfolioPieceProps } from '../types';

import Icon from './Icon';

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
					className="text-theme-primary hover:text-theme-secondary hover:scale-105 transition-all duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					{name}
				</Link>
				<span className="text-theme-secondary px-3">|</span>
				<Link
					href={githubLink}
					className="text-theme-primary hover:text-theme-secondary hover:scale-105 transition-all duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
			</h3>
			<p className="mb-4">{description}</p>
			<ul>
				{details.map((detail, index) => (
					<li className="mb-3" key={index}>
						<div className="flex justify-items-start">
							<Icon name="arrow" size={32} colour="text-theme-primary" />
							<span>{detail}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
