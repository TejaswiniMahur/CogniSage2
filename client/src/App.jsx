import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Atmosphere from './pages/contentPages/Atmosphere';
import Earth from './pages/contentPages/Earth';
import Planets from './pages/contentPages/Planets';
import PlanetsInfo from './pages/contentPages/PlanetsInfo'
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/atmosphere" element={<Atmosphere />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planetsInfo" element={<PlanetsInfo />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
