import "./home.css"
import { LuPenLine } from "react-icons/lu";
import animation from "../../assets/animation.png";
import card from "../../assets/card.png";
import flow from "../../assets/flow.png";
import shopping from "../../assets/shopping.png";
import netflix from "../../assets/netflix.png";
const Right = () => {
    return (
      <div className="right-h">
        <LuPenLine className="pen" />
        <h3 className="money">$10,600</h3>
        <img className="animation" src={animation} alt="animation" />
        <div className="card">
          <h3>My Card</h3> <h2>..</h2>
        </div>
        <img className="card-img" src={card} alt="card" />
        <div className="trans">
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
      </div>
    );
}
 
export default Right;