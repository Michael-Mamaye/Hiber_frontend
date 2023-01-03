import "./App.css";
// import Admins from "./admin";
import Clients from "./client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientsRoute from "./client";
import Admins from "./admin";
import PageNotFound from "./PageNotFound/PageNotFound";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./loginPage/LoginPage";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes children={Clients}>
					{/* this for the client page */}
					<Route
						exact
						path="/users"
						element={<Navigate to="/users/home" replace />}
					/>
					<Route
						exact
						path="/"
						element={<Navigate to="/users/home" replace />}
					/>
					<Route exact path="/users/*" element={<ClientsRoute />} />

					{/* for the admin dashboard  */}
					<Route exact path="/admin/*" element={<Admins />} />

					{/* for pages that do not found */}
					<Route
						exact
						path="/admin"
						element={<Navigate to="/admin/dashboard" replace />}
					/>
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
