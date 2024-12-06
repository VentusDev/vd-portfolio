import { useEffect } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import PanelLayout from './layouts/PanelLayout'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import ScrollTopArrow from './components/ScrollTopArrow/ScrollTopArrow'
import PizzeriaPage from './pages/PizzeriaPage/PizzeriaPage'

function App() {

	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}, [location]);

  return (
    <>
    <ScrollTopArrow />
        <Routes>
				<Route element={<PanelLayout />}>
					<Route
						path='/'
						element={
								<DashboardPage />
						}
					/>
				</Route>
        <Route element={<PanelLayout />}>
					<Route
						path='/pizzeria'
						element={
								<PizzeriaPage />
						}
					/>
				</Route>
    </Routes>
    </>
  )
}

export default App
