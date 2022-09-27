
import "./App.css";
import "./firebase/init"
import { lazy, Suspense, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Home = lazy (() => import("./components/home/Home"));
const Login = lazy(() => import("./components/login/Login"));
const About = lazy(() => import("./components/about/About"));
const Logout = lazy(() => import("./components/logout/Logout"));
const User = lazy(() => import("./components/user/User"));
const Nomatch = lazy(() => import("./components/nomatch/Nomatch"));

export const AppContext = createContext();


function App() {

  const [ user, setUser ] = useState("Jonny");

  return (
    <div className="App">
      <BrowserRouter>
      <AppContext.Provider value={{ user, setUser }}>
        <Header />
        <main>
          <Suspense fallback={<div id="app_fallback">Loading...</div>} >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="logout" element={<Logout />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="user" element={<User />}></Route>
            <Route path="nomatch" element={<Nomatch />}></Route>
          </Routes>
          </Suspense>
        </main>
        <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
