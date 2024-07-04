const Hvideo = ({vpic, vp}) => {
    return (
      
        <div className="video-div">
          <img className="video" src={vpic} alt="video" />
          <p>{vp}</p>
        </div>
      
    );
}
 
export default Hvideo;