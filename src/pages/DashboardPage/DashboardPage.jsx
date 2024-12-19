import { useRef } from 'react';
import About from '@/components/About/About';
import AppDesc from '@/components/AppDesc/AppDesc';
import Skills from '@/components/Skills/Skills';
import MoreAbout from '@/components/MoreAbout/MoreAbout';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';


const DashboardPage = () => {
	const elementRef = useRef();
	const handleScrollToMore = () => {
		elementRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<About />
			<h6 onClick={handleScrollToMore} style={{textAlign: 'center', color: 'gray', cursor: 'pointer'}}>więcej o mnie</h6>
			<PortfolioSection />
			<AppDesc />
			<Skills ref={elementRef} />
			<MoreAbout />
		

		</>
	);
};
export default DashboardPage;
