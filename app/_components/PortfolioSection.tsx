import { copy } from '../_library/copy';
import PortfolioPiece from './PortfolioPiece';
import HorizontalRule from './HorizontalRule';

import { PortfolioPiece as PortfolioPieceProps } from '../_types/types';

export default function PortfolioSection() {
	return (
		<section className="mb-12">
			<HorizontalRule colour="typescript" />
			<h2 className="pb-1 font-bold uppercase text-typescript">Portfolio</h2>

			{copy.portfolio.map(
				(portfolioPiece: PortfolioPieceProps, index: number) => (
					<PortfolioPiece key={index} {...portfolioPiece} />
				)
			)}
		</section>
	);
}
