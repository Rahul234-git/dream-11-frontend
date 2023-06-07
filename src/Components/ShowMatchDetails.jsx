import React, { useState, useEffect } from "react";
import { useNavigate,createSearchParams, Link } from 'react-router-dom';
import '../Assests/Css/Home.css';
import logo from '../Assests/Images/halaplay_logo.png';
import '../Assests/Css/ShowMatchDetails.css';


const ShowMatchDetails = () => {
    const navigate = useNavigate();
    const [matchDetails, setMatchDetails] = useState([]);
    const [matchId,setMatchId] = useState("");

    useEffect(() => {
        let getData = async () => {
            const getMatchData = await fetch("http://localhost:4000/api/getMatchDetails");
            const matchData = await getMatchData.json();
            setMatchDetails(matchData.response);
        }
        getData();
    }, []);
    console.log("Match DETAILS !!!!",matchDetails);

    const teamIdHandler = (val) => {
        setMatchId(val);
        navigate({
            pathname:'/matchId',
            search: createSearchParams({
                matchId:val
            }).toString()
        });
    }

    const createTeamHandler = () => {
        navigate({
            pathname:'/createTeam'
        })
    }


    return (
        <>
            <div className='homeHeader'>
                <img src={logo} className='logo' alt='sorry' />
                <span className='blogsBtn'>Blogs</span>
                <span className='pointSystemBtn'>Point System</span>
                <span className='aboutUsBtn'>About Us</span>
                <span className='offersBtn'>Offers</span>
                <button onClick={createTeamHandler} className="create-team-btn">Create Team</button>
            </div>
            <h1 className="match-details-title">Match details are below</h1>
            <table>
                <thead>
                    <tr>
                        <th>Match Id</th>
                        <th>title</th>
                        <th>Venue</th>
                        <th>date_start</th>
                        <th>date_end</th>
                        <th>Team A</th>
                        <th>Team B</th>
                        <th>short_title</th>
                        <th>subtitle</th>
                        <th>winning_team_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matchDetails.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className="matchId" onClick={() => teamIdHandler(item.match_id)}>{item.match_id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.venue.country}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_end}</td>
                                    <td>{item.teama.team_id}</td>
                                    <td>{item.teamb.team_id}</td>
                                    <td>{item.short_title}</td>
                                    <td>{item.subtitle}</td>
                                    <td>{item.winning_team_id}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default ShowMatchDetails