import "./App.scss";
import YourInfo from "./componentts/YourInfo/YourInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Plans from "./componentts/plan/Plans";
import AddOns from "./componentts/add-ons/AddOns";
import FishingUp from "./componentts/fishing-up/FishingUp";
import ThankYou from "./componentts/ThankYou";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <YourInfo />,
        },
        {
          path: "/plans",
          element: <Plans />,
        },
        {
          path: "/add-ons",
          element: <AddOns />,
        },
        {
          path: "/fishing-up",
          element: <FishingUp />,
        },
        {
          path: "/thank-you",
          element: <ThankYou />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
