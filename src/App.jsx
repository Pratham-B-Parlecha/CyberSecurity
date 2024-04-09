import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashBoard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import Forecasting from "./pages/Forecasting";
import StatusReport from "./pages/StatusReport";

const route = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/prediction", element: <Prediction /> },
  { path: "/forecasting", element: <Forecasting /> },
  { path: "/statusreport", element: <StatusReport /> },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
