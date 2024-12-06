import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing.tsx";
import DetailProfile from "./pages/detail-profile.tsx";
import Explore from "./pages/explore.tsx";
import './output.css'

document.title = 'No Curse Word'

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/account" element={<DetailProfile />} />
            <Route path="*" element={<App />} />
        </Routes>
    </Router>
);

export default App;
