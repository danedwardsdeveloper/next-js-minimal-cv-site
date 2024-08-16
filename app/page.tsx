import ProfessionalSummary from './_components/ProfessionalSummary';
import PortfolioSection from './_components/PortfolioSection';
import WorkHistorySection from './_components/WorkHistorySection';
import SkillsSection from './_components/SkillsSection';
import EducationSection from './_components/Education';
import Contact from './_components/Contact';
import Footer from './_components/Footer';

export default function Home() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-20 mx-6 md:mx-10 lg:mx-20 animate-fade-in">
			<main className="md:col-start-2 md:col-end-3 mt-8 md:mt-24 flex-grow max-w-[550px]">
				<ProfessionalSummary />
				<PortfolioSection />
				<WorkHistorySection />
			</main>
			<aside className="md:col-start-1 md:col-end-2 md:row-start-1 mt-8 md:mt-16">
				<SkillsSection />
				<EducationSection />
				<Contact />
			</aside>
			<Footer />
		</div>
	);
}
