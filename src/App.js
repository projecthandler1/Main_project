import Layout from "./components/ui/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from '../src/components/Auth/Login'
import SignUp from '../src/components/Auth/SignUp'
function App() {
  return (
    <Router>
      
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;

// 