import {BrowserRouter,Routes,Route} from "react-router-dom"
import Yours from "./pages/yours";
import Yes from "./pages/yes";
import Think from "./pages/Think";
import Think2 from "./pages/Think2";
import Wrong from "./pages/wrong";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Yours/>}/>
    <Route path="/yes" element={<Yes/>}/>
    <Route path="/think" element={<Think/>}/>
    <Route path="/think2" element={<Think2/>}/>
    <Route path="/wrong" element={<Wrong/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
