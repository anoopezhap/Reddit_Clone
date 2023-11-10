import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import IndividualPost from "./pages/IndividualPost";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="posts" element={<Posts />} />
          <Route path="posts:postId" element={<IndividualPost />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route index element={<Navigate replace to="login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
