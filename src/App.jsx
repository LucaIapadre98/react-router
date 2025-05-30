import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Homepage from "./pages/Homepage";
import MyPage from "./pages/MyPage";
import ListPage from "./pages/ListPage.jsx";


export default function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Homepage />} />
            <Route path="/personalpage" element={<MyPage />} />
            <Route path="/listpage" element={<ListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}