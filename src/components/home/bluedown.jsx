import "./home.css";
import { FaRegCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import chartpic from "../../assets/chartpic.png";
import days from "../../assets/days.png";
import lily from "../../assets/lily.png";
import video from "../../assets/video.png";
import time from "../../assets/time.png";
import star from "../../assets/star.png";
import Hvideo from "./hvideo";
import { IoIosArrowForward } from "react-icons/io";
import bb from "../../assets/bb.png";
import house from "../../assets/house.png";
import bclock from "../../assets/bclock.png";
import bmessage from "../../assets/bmessage.png";
import bmulti from "../../assets/bmulti.png";
import whiteb from "../../assets/whiteb.png";
import card from "../../assets/card.png";
import Right from "./right";
import { GiNetworkBars } from "react-icons/gi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { useState, useEffect } from "react";
import flow from "../../assets/flow.png";
import shopping from "../../assets/shopping.png";
import netflix from "../../assets/netflix.png";
const Bd = () => {
  const [number, setNumber] = useState(0);
  const circumference = 2 * Math.PI * 45; // 2πr, where r is 45

  useEffect(() => {
    const end = 38;
    const duration = 2000; // 2 seconds
    const step = 38 / ((duration / 1000) * 60); // 38 units over duration in frames

    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newNumber = Math.min((progress / duration) * end, end);
      setNumber(newNumber);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const offset = circumference - (number / 38) * circumference;

  return (
    <div className="bgc">
      <div className="circle"></div>
      <div className="cicle2"></div>
      <div className="blue">
        <div className="blue-axis">
          <img className="bb" src={bb} alt="blue-bulb" />
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
              <div className="content-second">
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
                <div className="network-icon">
                  <a className="barc" href="/">
                    <GiNetworkBars className="bar" />
                  </a>
                  <a href="/result">
                    <BiSolidMessageDetail className="msDetail" />
                  </a>
                </div>
                <h1 className="sales">Total Sales</h1>
                <h3 className="money-second">$10,600</h3>
                <div className="progress-circle">
                  <svg width="100" height="100">
                    <circle
                      className="background"
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#ccc"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      className="progress"
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#811818"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                  </svg>
                  <div className="number">{Math.round(number)}</div>
                </div>
                <h2 className="mcard">My Card</h2>
                <img className="cd-small" src={card} alt="card" />
                <div className="trans-second">
                  <h3>Transaction</h3> <h2 className="tran-plus">+</h2>
                </div>
                <div className="flow-div">
                  <img className="fl-img" src={flow} alt="flow" />
                  <div className="flow-div2">
                    <h4>Taxi</h4>
                    <p>01:21pm</p>
                  </div>
                  <h4>-$9,20</h4>
                </div>
                <div className="flow-div">
                  <img className="fl-img" src={shopping} alt="flow" />
                  <div className="flow-div2">
                    <h4>Shopping</h4>
                    <p>11:15AM</p>
                  </div>
                  <h4>-$142,00</h4>
                </div>
                <div className="flow-div">
                  <img className="fl-img" src={netflix} alt="flow" />
                  <div className="flow-div2">
                    <h4>Netflix</h4>
                    <p>Jan 10, 2020</p>
                  </div>
                  <h4>-$24.99</h4>
                </div>
                {/* <div className="blue-down2">
                  <img className="bd-h1" src={house} alt="house" />
                  <div className="bd-icons">
                    <img className="bdEach1" src={bclock} alt="bclock" />
                    <img className="bdEach" src={bmessage} alt="message" />
                    <img className="bdEach" src={bmulti} alt="bmulti" />
                  </div>
                </div> */}
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
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bd;
