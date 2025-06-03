import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Homepage from "./pages/Homepage";
import MyPage from "./pages/MyPage";

import ListPostPage from "./pages/posts/ListPostPage";


export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Homepage />} />
            <Route path="/personalpage" element={<MyPage />} />

            <Route path="/posts">
              <Route path="" element={<ListPostPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}