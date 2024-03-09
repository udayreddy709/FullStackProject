import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import MerchantLogin from './Components/MerchantLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignUp from './Components/MerchantSignUp';
import MerchantHomepagee from './Components/MerchantHomepagee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/merchant' element={<MerchantLogin />} />
          <Route path='/user' element={<UserLogin />} />
          <Route path='/merchantsignup' element={<MerchantSignUp />} />
          <Route path='/merchanthomepagee' element={<MerchantHomepagee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
