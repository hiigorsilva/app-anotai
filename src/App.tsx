import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/app" element={ <Home /> } />
    </Routes>
  )
}
