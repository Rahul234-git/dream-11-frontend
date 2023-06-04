import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import ShowMatchDetails from './Components/ShowMatchDetails';
import MatchDetails from './Components/MatchDetails';



const MainRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/showmatchdetails' element={<ShowMatchDetails />}/>
                <Route path='/matchId' element={<MatchDetails />}/>
            </Routes>
        </Router>
    )
}

export default MainRouter;