import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// IMPORTO I VARI LINK PER ALTRE PAGINE //
import Homepage from "./pages/Homepage";
import MyPage from "./pages/MyPage";

//IMPORTO VARIE LISTE DEI POST //
import ListPostPage from "./pages/posts/ListPostPage";
import ListDetailPage from "./pages/posts/ListDetailPage";


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
              <Route path=":id" element={<ListDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}