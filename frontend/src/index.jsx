import ComparePhone from "./pages/ComparePhone";
import ChooseFormPhone from "./pages/ChooseFormPhone";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import Home from "./pages/Home";
import User from "./User";
import AdminDashboard from "./pages/AdminDashboard";
import AddPhoneRef from "./pages/AddPhoneRef";
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
        path: "ChooseFormPhone",
        element: <ChooseFormPhone />,
      },
      {
        path: "addPhone",
        element: <AddPhone />,
      },
      {
        path: "addPhoneRef",
        element: <AddPhoneRef />,
      },
      {
        path: "comparePhone",
        element: <ComparePhone />,
      },
    ],
  },
];

export default Routes;
