import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import React from "react";
import PageNotFound from "./pages/PageNotFound";
import Logincompany from "./pages/Logincompany";
import Logincity from "./pages/Logincity";
import { Toaster } from "react-hot-toast";
import CityDashboard from "./pages/CityDashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="logincompany" element={<Logincompany />} />
            <Route path="logincity" element={<Logincity />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="citydashboard" element={<CityDashboard />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "red",
            color: "yellow",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
