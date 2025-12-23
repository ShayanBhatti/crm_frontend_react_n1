import { createBrowserRouter ,Navigate} from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
       {
        path: "/",
        element: <Navigate to="/login" replace />, // redirect root to login
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
