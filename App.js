// // import logo from './logo.svg';
// // import './App.css';
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from "./Navbar";
// import Login from "./Login";
// import Home from "./Home";
// import Register from "./Register";
// import Admin from "./Admin";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navbar />}>
//             <Route path="login" element={<Login />} />
//             <Route path="registration" element={<Registration />} />
//             <Route path="Admin" element={<Admin />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>

//     </>

//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Detile from "./Detile";
import Edit from "./Edit";
function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="Home" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="detile/:userid" element={<Detile/>}/>
            <Route path="edit/:userid" element={<Edit/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;