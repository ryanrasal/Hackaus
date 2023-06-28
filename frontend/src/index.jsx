import LoginPage from "./pages/LoginPage";
import App from "./App";
import Home from "./pages/Home";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];

export default Routes;
