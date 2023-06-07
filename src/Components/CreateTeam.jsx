import React,{ useState,useEffect } from "react";
import '../Assests/Css/CreateTeam.css';
import logo from '../Assests/Images/halaplay_logo.png';
// import '../Assests/Css/Home.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';



const CreateTeam = () => {
    const [matchData,setMatchData] = useState([]);
    const [teamData,setTeamData] = useState("");
    const navigate = useNavigate();

    useEffect(async() => {
        const getMatchData = await fetch("https://backen-dream-11-api.onrender.com/api/getMatchDetails");
        // const getMatchData = await fetch("http://localhost:4000/api/getMatchDetails");
        const matchDetails = await getMatchData.json();
        setMatchData(matchDetails.response); 
    },[]);

    const handleChange = (val) => {
        setTeamData(val);
    }

    const submitHandler = () => {
        const dataTeam= {
            team:teamData
        };
        axios({
            method:"POST",
            url:"https://backen-dream-11-api.onrender.com/api/createTeam",
            // url:"http://localhost:4000/api/createTeam",
            headers:{"Content-Type":"application/json"},
            data: dataTeam
        }).then(result => {
            console.log(`Team Created Succesfully!!!`)
            console.log("RESULT!!!!!",result);
        }).catch(error => {
            console.log(error);
        })
    }

    const viewTeamHandler = () => {
        navigate({
            pathname:'/viewTeam'
        })
    }

    

    return(
        <>
            <div className='homeHeader'>
                <img src={logo} className='logo' alt='sorry' />
                <span className='blogsBtn'>Blogs</span>
                <span className='pointSystemBtn'>Point System</span>
                <span className='aboutUsBtn'>About Us</span>
                <span className='offersBtn'>Offers</span>
                <button onClick={viewTeamHandler} className="view-team">View Team</button>
            </div>
            <h1 className="create-team-title">Please Create Team </h1>
            <div className="create-team-cont">
                <label className="select-team-label">Select Team</label><br />
                <select onChange={(event) => handleChange(event.target.value)} className="select-item">
                    <option selected disabled>Select</option>
                    {
                        matchData.map((item,index) => {
                            return <option value={item.teama.name} key={index}>{item.teama.name}</option>   
                        })
                    }
                </select>
                <button onClick={submitHandler} className="team-submit-btn">Submit</button>
            </div>
        
        
        </>
    )
}

export default CreateTeam