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
import Shapes from './pages/contentPages/Shapes';
import BalancedDiet from './pages/contentPages/BalancedDiet';
import AnimalSound from './pages/contentPages/AnimalSound';
import AtmosphereQ from './pages/contentPages/quizzes/AtmosphereQ';
import PlanetsQ from './pages/contentPages/quizzes/PlanetsQ';
import EarthQ from './pages/contentPages/quizzes/EarthQ';
import AnimalQ from './pages/contentPages/quizzes/AnimalQ';
import ShapesQ from './pages/contentPages/quizzes/ShapesQ';
import DietQ from './pages/contentPages/quizzes/DietQ';
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
        <Route path="/shapes" element={<Shapes />} />
        <Route path="/balanced-diet" element={<BalancedDiet />} />
        <Route path="/animal-sound" element={<AnimalSound />} />
        <Route path="/planet-quiz" element={<PlanetsQ />} />
        <Route path="/atmosphere-quiz" element={<AtmosphereQ />} />
        <Route path="/earth-quiz" element={<EarthQ />} />
        <Route path="/animal-quiz" element={<AnimalQ />} />
        <Route path="/shapes-quiz" element={<ShapesQ />} />
        <Route path="/diet-quiz" element={<DietQ />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
