import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import DashboardPage from "../pages/DashboardPage"; 
import ProfilePage from "../pages/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import SuccessfullPage from "../pages/SuccessfullPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
      {
        path: "dashboard", 
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage/>,
          },
          {
            path: "profile", 
            element: <ProfilePage/>,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "successfull",
        element: <SuccessfullPage />,
      },
    ],
  },
]);