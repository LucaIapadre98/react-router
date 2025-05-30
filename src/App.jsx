import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";


export default function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
           <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}