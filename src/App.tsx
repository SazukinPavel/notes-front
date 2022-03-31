import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Layout from "./hoc/Layout";

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </>

  );
}

export default App;