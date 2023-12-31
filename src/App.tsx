import { Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import HomePage from "./sections/HomePage/HomePage";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/Ui/NavBar";

export function App() {
	return (
		<>
			<UserProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="*" element={<h2>404</h2>} />
				</Routes>
			</UserProvider>
		</>
	);
}
