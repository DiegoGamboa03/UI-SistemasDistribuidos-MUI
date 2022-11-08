import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login  from './pages/login';
import RegisterTopic from './pages/registerTopic';
import RegisterClient from './pages/registerClient';

export default function App(){
    return (
        <Router>
            <Routes> 
                <Route path="/" element = {<Login/>}/>
                <Route path="/registerTopic" element = {<RegisterTopic/>}/>
                <Route path="/registerClient" element = {<RegisterClient/>}/>
            </Routes>
        </Router>
    );
}