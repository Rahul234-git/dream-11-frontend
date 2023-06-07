import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import ShowMatchDetails from './Components/ShowMatchDetails';
import MatchDetails from './Components/MatchDetails';
import CreateTeam from './Components/CreateTeam';
import ViewTeam from './Components/ViewTeam';







const MainRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/showmatchdetails' element={<ShowMatchDetails />}/>
                <Route path='/matchId' element={<MatchDetails />}/>
                <Route path='/createTeam' element={<CreateTeam />} />
                <Route path='/viewTeam' element={<ViewTeam />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;