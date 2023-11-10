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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="login/dashboard/posts" element={<AllPosts />} />
          <Route
            path="login/:usedId/posts:postId"
            element={<IndividualPost />}
          />
          <Route path="login/dashboard/:usedId/posts" element={<MyPosts />} />
          <Route
            path="login/dashboard/:userId/posts/:postId"
            element={<Post />}
          />

          <Route
            path="login/dashboard/:usedId/createPost"
            element={<CreatePost />}
          />

          <Route path="*" element={<PageNotFound />} />
          <Route path="login/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />

        <Route index element={<Navigate replace to="login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
