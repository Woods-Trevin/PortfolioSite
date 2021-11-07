import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splash from './Components/Splash'
import Navbar from './Components/Navbar'
import ProjectsComponent from './Components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* react router dom v6 uses "Routes" instead of "Switch" */}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/portfolio" element={<ProjectsComponent />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
