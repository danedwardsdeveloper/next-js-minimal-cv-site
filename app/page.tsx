import './_styles/oldStyles.scss';

import ProfessionalSummary from './_components/ProfessionalSummary';
import PortfolioSection from './_components/PortfolioSection';
import WorkHistorySection from './_components/WorkHistorySection';
import SkillsSection from './_components/SkillsSection';
import EducationSection from './_components/Education';
import Contact from './_components/Contact';
import Footer from './_components/Footer';

export default function Home() {
	return (
		<>
			<main className="main-column order-2 max-w-550">
				<ProfessionalSummary />
				<PortfolioSection />
				<WorkHistorySection />
			</main>
			<aside className="order-1 mt-16">
				<SkillsSection />
				<EducationSection />
				<Contact />
			</aside>
			<Footer />
		</>
	);
}
