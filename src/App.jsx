import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import IndividualPost from "./pages/IndividualPost";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import AllPosts from "./features/Posts/AllPosts";
import MyPosts from "./features/Posts/MyPosts";
import CreatePost from "./features/Posts/CreatePost";
import Post from "./features/Posts/Post";
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SignUp from "./pages/SignUp";

//setting up query client

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
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="dashboard/posts" element={<AllPosts />} />
            <Route path="dashboard/myposts" element={<MyPosts />} />
            <Route path="dashboard/myposts/:id" element={<Post />} />

            <Route path="dashboard/createPost" element={<CreatePost />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* <Route path="login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
