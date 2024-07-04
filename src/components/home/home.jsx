import './home.css'
import { FaRegCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import visitors from "../../assets/visitors.png";
import customerchart from "../../assets/customerchart.png";
import orders from "../../assets/orders.png";
import chartpic from "../../assets/chartpic.png";
import days from "../../assets/days.png";
import lily from "../../assets/lily.png";
import video from "../../assets/video.png";
import time from "../../assets/time.png";
import star from "../../assets/star.png";
import Hcomp from './hcomp';
import Hvideo from './hvideo';
import { IoIosArrowForward } from "react-icons/io";
import bb from "../../assets/bb.png";
import house from "../../assets/house.png";
import bclock from "../../assets/bclock.png";
import bmessage from "../../assets/bmessage.png";
import bmulti from "../../assets/bmulti.png";
import whiteb from "../../assets/whiteb.png";
import chartSmallScreen from "../../assets/chartSmallScreen.png";
import Right from './right';
const Home = () => {
    return (
      <div className="bgc">
        <div className="circle"></div>
        <div className="cicle2"></div>
        < div className="blue">
          <div className="blue-axis">
            <img className='bb' src={bb} alt="blue-bulb" />
            <div>
              <img className="hs" src={house} alt="house" />
            </div>
            <div className="blue-icons">
              <img src={bclock} alt="bclock" />
              <img src={bmessage} alt="message" />
              <img src={bmulti} alt="bmulti" />
            </div>
          </div>
          
          <div className="white">
            <div className="white-flex">
              <div>
                <div className="content">
                  <div className="input-h4-profile">
                    <img className="wb" src={whiteb} alt="logo" />
                    <div className="input-circle">
                      <input className="inputcontainer" placeholder="search" />
                      <FaRegCircle className="circle-icon" />
                    </div>
                    <div className="nav-middle">
                      <h4>Feedback</h4> <h4>Contact</h4> <h4>Help</h4>
                    </div>
                    <div className="profile-div">
                      <IoIosNotifications className="redp-icon" />{" "}
                      <p className="redp"></p>
                      <img className="avatar" src={avatar} alt="profile" />
                    </div>
                  </div>
                  {/* <div className='visitors'>
                <img src={visitors} alt='visitors'/> <div><p>Visitors</p>
                <h3>10,320</h3></div>
              </div> */}
                  <div className="hcom">
                    <Hcomp imag={visitors} word="Visitors" headp="10,320" />
                    <Hcomp
                      imag={customerchart}
                      word="customers"
                      headp="4,628"
                    />
                    <Hcomp
                      imag={orders}
                      word="orders"
                      headp="2,980"
                      rd="red"
                      whi="#ffffff"
                    />
                  </div>
                  <img className="chart-small" src={chartSmallScreen} alt="chart" />
                  <img className="chart-i" src={chartpic} alt="chart" />
                  <div className="daysdiv">
                    <img className="days" src={days} alt="days" />
                    <div className="lily-parent">
                      <div className="lily-div">
                        <img className="lily" src={lily} alt="lily" />
                        <div className="another-lily-div">
                          <h3>Lily Donovan</h3> <p>Business Trainer</p>
                        </div>
                      </div>
                      <h4 className="lily-h4">
                        How to properly manage your <br />
                        personal budget?
                      </h4>
                      <div className="video-parent">
                        <Hvideo vpic={video} vp="Video" />
                        <Hvideo vpic={time} vp="15 mins" />
                        <Hvideo vpic={star} vp="12 likes" />
                      </div>
                      <div className="connect-div">
                        <p>5 Days ago</p>
                        <button>
                          Connect <IoIosArrowForward className="cn-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <h1>ddd</h1> */}
              <Right />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;