import LoginPage from "./pages/LoginPage";
import App from "./App";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];

export default Routes;
