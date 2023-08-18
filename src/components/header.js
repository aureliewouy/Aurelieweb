import { useEffect, useState } from 'react';
import '../css/header.css';
import '../App.css';
import AureWeb from "../medias/webaure.svg";
function Header() {
  const [showText, setShowText] = useState(false);
  const [heartbeat, setheartbeat] = useState(false);

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
        <h1>
            <span>AURÉLIE CEDIA </span>
            <span>DÉVELOPPEUSE WEB</span>
            <div className='ease-in-out'><img className="aureWeb" src={AureWeb}/></div>
        </h1>
      </div>
    );
}
export default Header