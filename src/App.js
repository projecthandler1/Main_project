import Layout from "./components/ui/Layout";
import {useState} from 'react'
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
  const [snackBar,setSnackBar]=useState(false)
  const [color,setColor]=useState('')
  const [message,setMessage]=useState('')
  return (
    <Router>
      
    <Layout snackBar={snackBar} color={color} message={message}>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Contact' element={<Contact setSnackBar={setSnackBar} 
        setColor={setColor} setMessage={setMessage}/>}/>
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