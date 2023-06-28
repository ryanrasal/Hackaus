import LoginPage from "./pages/LoginPage";
import App from "./App";
import Home from "./pages/Home";
import User from "./User";

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
    ],
  },
];

export default Routes;
