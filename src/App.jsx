
import { Navigate, Route, Routes } from 'react-router-dom';
import PanelLayout from './layouts/PanelLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ScrollTopArrow from './components/ScrollTopArrow/ScrollTopArrow';
import PizzeriaPage from './pages/PizzeriaPage/PizzeriaPage';
import PokerSzopPage from './pages/PokerSzopPage/PokerSzopPage';
import SferaTarotaPage from './pages/SferaTarotaPage/SferaTarotaPage';

function App() {


	return (
		<>
			<ScrollTopArrow />
			<Routes>
				<Route element={<PanelLayout />}>
					<Route path='/' element={<DashboardPage />} />
				</Route>
				<Route element={<PanelLayout />}>
					<Route path='projekty/2024/pizzeria' element={<PizzeriaPage />} />
				</Route>
				<Route element={<PanelLayout />}>
					<Route path='projekty/2024/poker-szop' element={<PokerSzopPage />} />
				</Route>
				<Route element={<PanelLayout />}>
					<Route path='projekty/2024/sfera-tarota' element={<SferaTarotaPage />} />
				</Route>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</>
	);
}

export default App;
