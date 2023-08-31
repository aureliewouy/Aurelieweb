import { useEffect, useRef, useState } from 'react';
import '../css/header.css';
import '../App.css';
import Aure from "../medias/transparent.svg"
import AureDark from "../medias/transparentDark.svg"
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/themeaction';
const Header = ({ isNightMode, toggleTheme }) => {
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
      <div style={{position:"relative"}}>
        <h1 className='selectDisable' >
            <span ref={h1Ref} className='spanTitle'>AURÉLIE CEDIA
              </span><br/>
            <span ref={h1RefB}>DÉVELOPPEUSE WEB      
             </span>
             <div style={{width:'70vw'}} >
             {isNightMode? 
              <img className="aureWeb selectDisable" src={Aure} alt='Aurélie CEDIA transparent'/>:
              <img className="aureWeb selectDisable" src={AureDark} alt='Aurélie CEDIA transparent'/>}
              
              </div> 
        </h1>
      </div>
    );
}
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);