import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Route/Route.jsx";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    </AuthProvider>
  </div>
);
