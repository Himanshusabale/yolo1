
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EditProfile from "./pages/EditProfile";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  // This will be replaced with actual auth check once Supabase is connected
  const isAuthenticated = false;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/edit-profile" /> : <Login />
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? <Navigate to="/edit-profile" /> : <Signup />
              }
            />
            <Route
              path="/edit-profile"
              element={
                isAuthenticated ? <EditProfile /> : <Navigate to="/login" />
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
