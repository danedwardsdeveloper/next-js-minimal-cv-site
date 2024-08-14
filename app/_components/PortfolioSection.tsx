import { copy } from '../_library/copy';
import PortfolioPiece from './PortfolioPiece';
import HorizontalRule from './HorizontalRule';

import { PortfolioPiece as PortfolioPieceProps } from '../_types/types';

export default function PortfolioSection() {
	return (
		<section className="section">
			<HorizontalRule colour="purple-800" />
			<h2 className="section-heading pb-1 section-heading--accent-2 font-bold uppercase text-purple-800">
				Portfolio
			</h2>

			{copy.portfolio.map(
				(portfolioPiece: PortfolioPieceProps, index: number) => (
					<PortfolioPiece key={index} {...portfolioPiece} />
				)
			)}
		</section>
	);
}
