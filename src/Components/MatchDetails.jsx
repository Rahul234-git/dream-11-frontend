import React,{ useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom';
import '../Assests/Css/Home.css';
import logo from '../Assests/Images/halaplay_logo.png';
import '../Assests/Css/MatchDetails.css';
import axios from 'axios';


const MatchDetails = () => {
    const [matchDetails,setMatchDetails] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = searchParams.get("matchId");
    console.log(params);
    
    useEffect(() => {
        const sendMatchId = {
            matchId:params
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        axios({
                method:"POST",
                url:"https://backen-dream-11-api.onrender.com/api/matchDetailsById",
                // url:"http://localhost:4000/api/matchDetailsById",
                headers:{"Content-Type":"application/json"},
                data:sendMatchId
            }).then(result => {
                setMatchDetails(result.data.response);
            }).catch(error => {
                console.log(error);
        });
    },[]);


    return (
        <>
            <div className='homeHeader'>
                <img src={logo} className='logo' alt='sorry' />
                <span className='blogsBtn'>Blogs</span>
                <span className='pointSystemBtn'>Point System</span>
                <span className='aboutUsBtn'>About Us</span>
                <span className='offersBtn'>Offers</span>
            </div>
            <h1 className="match-details-title">Match details are below</h1>
            <table>
                <thead>
                    <tr>
                        <th>MatchId</th>
                        <th>Commentary</th>
                        <th>Competition</th>
                        <th>Date_end</th>
                        <th>Date_end_ist</th>
                        <th>Date_start</th>
                        <th>Date_start_ist</th>
                        <th>Domestic</th>
                        {/* <th>Equation</th>
                        <th>Format</th>
                        <th>Format_str</th> */}
                        {/* <th>Game_State</th>
                        <th>Game_State_Str</th> */}
                        <th>Latest_Inning_Number</th>
                        {/* <th>Live</th> */}
                        {/* <th>Match_Dls_Affected</th> */}
                    </tr>

                </thead>
                <tbody>
                    {
                        matchDetails.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.match_id}</td>
                                    <td>{item.commentary}</td>
                                    <td>{item.competition.abbr}</td>
                                    <td>{item.date_end}</td>
                                    <td>{item.date_end_ist}</td>
                                    <td>{item.date_start}</td>
                                    <td>{item.date_start_ist}</td>
                                    <td>{item.domestic}</td>
                                    {/* <td>{item.equation}</td>
                                    <td>{item.format}</td>
                                    <td>{item.format_str}</td> */}
                                    {/* <td>{item.game_state}</td>
                                    <td>{item.game_state_str}</td> */}
                                    <td>{item.latest_inning_number}</td>
                                    {/* <td>{item.live}</td> */}
                                    {/* <td>{item.match_dls_affected}</td> */}
                                </tr>
                            )
                        })

                    }

                </tbody>
            </table>


        </>
    )
}

export default MatchDetails;