import Navbar from "./Navbar";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import {Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound";



function App() {
  return (
  <> 
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/meal/:mealId" element={<Meal/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </>
  )
}

export default App;
