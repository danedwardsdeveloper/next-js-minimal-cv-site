import ProfessionalSummary from '../_components/ProfessionalSummary';
import PortfolioSection from '../_components/PortfolioSection';
import WorkHistorySection from '../_components/WorkHistorySection';
import SkillsSection from '../_components/SkillsSection';
import EducationSection from '../_components/Education';
import Contact from '../_components/Contact';

export default function Print() {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-20 mx-6 md:mx-10 lg:mx-20 animate-fade-in flex-grow text-sm">
				<main className="lg:col-start-2 lg:col-end-3 flex-grow max-w-[550px]">
					<ProfessionalSummary />
					<PortfolioSection />
					<WorkHistorySection />
				</main>
				<aside className="md:col-start-1 md:col-end-2 md:row-start-1 mt-8 md:mt-48">
					<SkillsSection />
					<EducationSection />
					<Contact />
				</aside>
			</div>
		</div>
	);
}
