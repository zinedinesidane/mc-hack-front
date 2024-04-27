import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ConfirmEmail from "./pages/WaitConfirm";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoggedInLayout from "./ui/LoggedInLayout";
import Customization from "./pages/Customization";
import Employers from "./pages/Employers";
import Workflow from "./pages/Workflow";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<LandingPage />} />

              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="confirm-email" element={<ConfirmEmail />} />
            </Route>
            <Route element={<LoggedInLayout />}>
              <Route index element={<Navigate replace to="customization" />} />
              <Route path="customization" element={<Customization />} />
              <Route path="workflow" element={<Workflow />} />
              <Route path="employers" element={<Employers />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
