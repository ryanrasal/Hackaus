import LoginPage from "./pages/LoginPage";
import App from "./App";
import Home from "./pages/Home";
import User from "./User";
import AdminDashboard from "./pages/AdminDashboard";
import AdminFormUser from "./components-admin/AdminFormUser";
import AddPhone from "./pages/AddPhone";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <User />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-user",
        element: <AdminFormUser />,
      },
      {
        path: "addPhone",
        element: <AddPhone />,
      },
    ],
  },
];

export default Routes;
