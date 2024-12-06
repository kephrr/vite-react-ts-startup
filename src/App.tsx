import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing.tsx";
import './output.css'
import DetailProfile from "./pages/detail-profile.tsx";


document.title = 'No Curse Word'
export const LINKS = {
    twitter: '',
    github: '',
    linkedin: ''
}

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/toxics" element={<App />} />
            <Route path="/account" element={<DetailProfile />} />
            <Route path="*" element={<App />} />
        </Routes>
    </Router>
);

export default App;
