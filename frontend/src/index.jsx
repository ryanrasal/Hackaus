import LoginPage from "./pages/LoginPage";
import App from "./App";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
];

export default Routes;
