import { useEffect, useRef, useState } from 'react';
import '../css/header.css';
import '../App.css';
import AureTop from "../medias/h1-b.svg";
import AureBottom from "../medias/h1-bottom.svg";
import Aure from "../medias/transparent.svg"
function Header() {
  const [showText, setShowText] = useState(false);
  const [heartbeat, setheartbeat] = useState(false);
  const [width, setWidth] = useState(false);
  const [widthB, setWidthB] = useState(false);
  const h1Ref = useRef(null);
  const h1RefB = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;
    const h1ElementB = h1RefB.current;
    if (h1Element) {
      const boundingBox = h1Element.getBoundingClientRect();
      const boundingBoxB = h1ElementB.getBoundingClientRect();
      setWidth(boundingBox.width + 100);
      setWidthB(boundingBoxB.width);
    }
  }, []);
  useEffect(() => {
    // Animation sequence
    setTimeout(() => {
      setShowText(true);
    });

    setTimeout(() => {
      setShowText(false);
      setheartbeat(true);
    }, 3000);
    setTimeout(() => {
      setheartbeat(false);
    }, 4000);
  }, []);

return (
      <div className="" style={{zIndex:10, position:"relative"}}>
        <h1  >
            <span ref={h1Ref} className='spanTitle'>AURÉLIE CEDIA
            {/* <div className='ease-in-out'>
              <img style={{width:width +"px"}}   className="aureWeb" src={AureTop}/></div>  */}
              </span><br/>
            <span ref={h1RefB}>DÉVELOPPEUSE WEB
             {/* <div className='ease-in-out'><img className="aureWeb" style={{width:widthB +"px"}} src={AureBottom}/></div> */}           
             </span>
             <div className='ease-in-out'  style={{width:width +"px"}} ><img className="aureWeb" src={Aure}/></div> 
        </h1>
      </div>
    );
}
export default Header