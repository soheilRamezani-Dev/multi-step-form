import "./App.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { startTransition } from "react";

const RootLayout = lazy(() => import("./layout/rootLayout"));
const YourInfo = lazy(() => import("./componentts/YourInfo/YourInfo"));
const Plans = lazy(() => import("./componentts/plan/Plans"));
const AddOns = lazy(() => import("./componentts/add-ons/AddOns"));
const FishingUp = lazy(() => import("./componentts/fishing-up/FishingUp"));
const ThankYou = lazy(() => import("./componentts/ThankYou"));

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

  const store = createStore(reducer);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  );
}

export default App;
