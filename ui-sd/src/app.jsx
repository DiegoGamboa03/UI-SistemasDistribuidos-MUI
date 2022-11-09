import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login  from './pages/login';
import RegisterTopic from './pages/registerTopic';
import RegisterClient from './pages/registerClient';
import Bulb from './pages/bulb';
import Switch from './pages/switch';
import RegisterPublisher from './pages/registerPublisher';

export default function App(){
    return (
        <Router>
            <Routes> 
                <Route path="/" element = {<Login/>}/>
                <Route path="/registerTopic" element = {<RegisterTopic/>}/>
                <Route path="/registerClient" element = {<RegisterClient/>}/>
                <Route path = "/registerPublisher" element = {<RegisterPublisher/>}/>
                <Route path="/bulb" element = {<Bulb/>}/>
                <Route path="/switch" element = {<Switch/>}/>
            </Routes>
        </Router>
    );
}