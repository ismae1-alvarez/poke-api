import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import {Login, ProtectedRoute, Home, PokeInfoPage} from "./pages/"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route  element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pokemon/:name" element={<PokeInfoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
