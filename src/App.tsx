import DashBoard from "./pages/dashboard"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

return <div>
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  </BrowserRouter>
</div>

}
export default App
