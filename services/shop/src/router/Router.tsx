import { App } from "@/components/App";
import { LazyShop } from "@/pages/Shop.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
      path: "/shop",
      element: <App/>,
      children: [
          {
              path: '/shop/main',
              element:
                  <Suspense fallback={'Loading...'}><LazyShop/></Suspense>
          },
          {
              path: '/shop/second',
              element:
                  <Suspense fallback={'Loading...'}><h1>Second shop page</h1></Suspense>
          }
      ]
  },
];

export const router = createBrowserRouter(routes);

export default routes;
