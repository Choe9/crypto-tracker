import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";
import NotFound from "./NotFound";
import ErrorComponent from "./routes/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/crypto-tracker",
        element: <Coins />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
