import ManageRef from "@components/ManageRef";
import ChooseFormPhone from "./pages/ChooseFormPhone";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import Home from "./pages/Home";
import User from "./User";
import AdminDashboard from "./pages/AdminDashboard";
import AddPhoneRef from "./pages/AddPhoneRef";
import AdminFormUser from "./components-admin/AdminFormUser";
import AddPhone from "./pages/AddPhone";
import Compare from "./pages/Compare";
import Recap from "./components/Recap";
import ModaleSignature from "./pages/ModaleSignature";

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
        path: "ModaleSignature",
        element: <ModaleSignature />,
      },
      {
        path: "manageRef",
        element: <ManageRef />,
      },
    ],
  },
  {
    path: "/my-phone",
    element: <User />,
    children: [
      {
        path: "recapitulatif",
        element: <Recap />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
    ],
  },
];

export default Routes;
