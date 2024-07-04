const Hcomp = ({imag, word, headp, rd, whi}) => {
    return (
      <div className="visitors" style={{ backgroundColor: rd }}>
        <img className="allimag" src={imag} alt="visitors" />
        <div className="word">
          <p>{word}</p>
          <h3 style={{ color: whi }}>{headp}</h3>
        </div>
      </div>
    );
}
 
export default Hcomp;