import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../Assests/Css/Home.css';
import logo from '../Assests/Images/halaplay_logo.png';
import pic from '../Assests/Images/image-1.png';
import fbIcon from '../Assests/Images/fb-icon.png';
import twitterIcon from '../Assests/Images/twitter-icon.png';
import instagramIcon from '../Assests/Images/instagram-icon.jpg';
import Axios from 'axios';
import DepositIcon from '../Assests/Images/deposit.png';
import SignupIcon from '../Assests/Images/signup-icon.png';



const Home = () => {
  const navigate = useNavigate();
  const [teamIcon,setteamIcon] = useState("");
  
  const dataReq =  Axios.get("https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1")
  .then(result => {
    console.log("Data Response Items",result.data.response.items);
    setteamIcon(result.data.response.items[0].teama.logo_url);
  }).catch(error => {
    console.log(error);
  });
  console.log(dataReq);
  const showMatchHandler = () => {
    navigate({
      pathname:"/showmatchdetails"
    })

  }


  return (
    <>
      <div className='homeHeader'>
        <img src={logo} className='logo' alt=''  />
        <span className='blogsBtn'>Blogs</span>
        <span className='pointSystemBtn'>Point System</span>
        <span className='aboutUsBtn'>About Us</span>
        <span className='offersBtn'>Offers</span>
        <span className='show-match-details' onClick={showMatchHandler}>Show Match Details</span>
      </div>
      <img src={pic} alt='' />
      <h1 className='headerTitle'>Play Fantasy Game Online & Earn More</h1>
      <div className='box1'>
        <img src={DepositIcon} className='depositIcon' alt='' />
        <h3 className='deposit-offer'>Deposit Offer</h3>
        <p className='deposite-title'>Get League Join offer on 1st </p>
        <span className='deposit'>Deposit</span>
      </div>
      <div className='box2'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='signup-offer'>Signup Offer</h3>
        <p className='signup-title'>Get ru250 Discount on </p>
        <span className='registration'>Registration</span>
      </div>
      <div className='box3'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='refer-earn'>Refer & Earn</h3>
        <p className='refer-earn-title'>Have Friends? Let your  </p>
        <span className='friends-money'>friends make some money</span>
      </div>
      <div className='box4'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='fourOne-offer'>4+1 Offer</h3>
        <p className='fourOne-title'>Join with 4 & get 5th Entry </p>
        <span className='free'>Free</span>
      </div>
      <h1 className='halaplaybenefits'>HalaPlay Benefits</h1>
      <div className='box5'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='signup-offer'>Signup Offer</h3>
        <p className='signup-title'>Get ru250 Discount on </p>
        <span className='registration'>Registration</span>
      </div>
      <div className='box6'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='signup-offer'>Signup Offer</h3>
        <p className='signup-title'>Get ru250 Discount on </p>
        <span className='registration'>Registration</span>
      </div>
      <div className='box7'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='signup-offer'>Signup Offer</h3>
        <p className='signup-title'>Get ru250 Discount on </p>
        <span className='registration'>Registration</span>
      </div>
      <div className='box8'>
        <img src={SignupIcon} className='signupIcon' alt='' />
        <h3 className='signup-offer'>Signup Offer</h3>
        <p className='signup-title'>Get ru250 Discount on </p>
        <span className='registration'>Registration</span>
      </div>
      <h1 className='easySteps'>Easy Steps to Play Online Fantasy Games</h1>
      <div className='box9'>
        hiiiiiiiiii
      </div>
      <div className='box11'>
        helllo
      </div>
      <div className='box10'>
        Hello 
      </div>
      <div className='box12'>
        Hello 
      </div>
      <div className='box13'>
        Hello 
      </div>
      <div className='box14'>
        Hello 
      </div>
      <div className='footer-1'>
        <h4 className='followUs'>Follow Us</h4>
        <img src={fbIcon} alt='' className='fb-Icon' />
        <img src={twitterIcon} alt='sorry' className='twitter-Icon'/>
        <img src={instagramIcon} alt='sorry' className='instagram-Icon'/>
        <p className='coplaint-text'>Write to us for any complaint or feedback</p>
        <span className='mail'>care@halaplay.com</span>
      </div>
      <div className='footer-2'>
        <img src={logo} className='footer-logo' alt='' />
        <h2 className='company-name'>Halaplay Technologies Pvt. Ltd.</h2>
        <img src={teamIcon} alt='' className='teamIcon' />

      </div>

    </>
  )
}

export default Home;
