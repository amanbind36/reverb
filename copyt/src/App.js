import TopNavbar from './Components/Nav/TopNavbar';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/home/Home';
import FooterBottem from './Components/footer/FooterBottem';
import LogIn from './Components/Forms/LogIn';
import SignIn from './Components/Forms/SignIn';
import HelpCenter from './Components/Help Center/HelpCenter'
import ReverbGives from './Components/Reverb Gives/ReverbGives'
import Shops from './Components/Sub nav pages/Shops';
import Footer from './Components/footer/Footer';




import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
   <div>

    <BrowserRouter>
    <TopNavbar/>
    <Navbar/>
    
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/LogIn' element={<LogIn/>} />
    <Route path='/SignIn' element={<SignIn/>} />
    <Route path='/HelpCenter' element={<HelpCenter/>} />
    <Route path='/ReverbGives' element={<ReverbGives/>} />
    <Route path='/Shops' element={<Shops/>} />

  </Routes>
    <Footer/>
    <FooterBottem/>
    </BrowserRouter>

   </div>
  );
}

export default App;
