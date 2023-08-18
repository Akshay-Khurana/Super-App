import LeftImg from "./Components/LeftImg";
import Form from "./Components/Form";
import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Category from "./Components/Category";
import RegistrationPage from "./Components/RegistrationPage";


function App() {

  return (

      
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />}></Route>
        <Route path = "category" element={<Category />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
