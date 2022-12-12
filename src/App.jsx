import { Route, Routes } from "react-router-dom";
// import "./App.css";
import RootLayout from "./components/RootLayout";
import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage from "./pages/BlogPosts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage from "./pages/PostDetail";
import WelcomePage from "./pages/WelComePage";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPostsPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
        <Route path="/blog/new" element={<NewPostPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
