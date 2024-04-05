import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/homePage"
import Login from "./component/loginPage"
import Email from "./component/email"
import Staff from './component/staffPage';
import { useEffect } from 'react';
import ReloadRouter from './component/router/routerReloadConfig';
import { Toaster } from 'react-hot-toast';
function App() {
  useEffect(() => {
    window.onload = function() {
      ReloadRouter();
    };
  }, []);
  return (
    <div className="App">
      <Toaster position='top-right' reverseOrder={false}></Toaster>

      <header className="App-header">
        <Router>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/login"} element={<Login />}></Route>
            <Route path={"/email"} element={<Email />}></Route>
            <Route path={"/staff"} element={<Staff />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
