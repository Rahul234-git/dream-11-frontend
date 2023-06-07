import React,{useState,useEffect} from "react";
import {} from 'react-router-dom';
import logo from '../Assests/Images/halaplay_logo.png';
import '../Assests/Css/ViewTeam.css';


const ViewTeam = () => {
    const [teamData,setTeamData] = useState([]);

    useEffect(() => {
        const getTeamData =async () => {
            const getTeam = await fetch("https://backen-dream-11-api.onrender.com/api/getTeamData");
            // const getTeam = await fetch("http://localhost:4000/api/getTeamData");
            const teamDetails = await getTeam.json();
            setTeamData(teamDetails.response);
        }
        getTeamData();
    },[teamData]);

    console.log("TeamData",teamData);
    
    


    return(
        <>
            <div className='homeHeader'>
                    <img src={logo} className='logo' alt='sorry' />
                    <span className='blogsBtn'>Blogs</span>
                    <span className='pointSystemBtn'>Point System</span>
                    <span className='aboutUsBtn'>About Us</span>
                    <span className='offersBtn'>Offers</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teamData.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.team}</td>

                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        {
                            teamData.map(() => {
                                return <td>

                                </td>
                            })
                        }
                        <td>1</td>
                        <td>LJLLDSJ</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default ViewTeam;
