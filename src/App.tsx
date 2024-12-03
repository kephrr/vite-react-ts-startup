import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing-page/Landing.tsx";
import './output.css'
import DetailProfile from "./pages/details-profile/DetailProfile.tsx";


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
            <Route path="/hateful-users" element={<App />} />
            <Route path="/account" element={<DetailProfile />} />
            <Route path="*" element={<App />} />
        </Routes>
    </Router>
);

export default App;
