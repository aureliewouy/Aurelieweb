import '../css/header.css';
import '../App.css';
import AureTop from "../medias/h1-top.svg"
import AureBottom from "../medias/h1-bottom.svg"
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/themeaction';
const Header = ({ isNightMode, toggleTheme }) => {
  // const [showText, setShowText] = useState(false);
  // const [heartbeat, setheartbeat] = useState(false);
  // const [width, setWidth] = useState(false);
  // const [widthB, setWidthB] = useState(false);
  // const h1Ref = useRef(null);
  // const h1RefB = useRef(null);

  // useEffect(() => {
  //   const h1Element = h1Ref.current;
  //   const h1ElementB = h1RefB.current;
  //   if (h1Element) {
  //     const boundingBox = h1Element.getBoundingClientRect();
  //     const boundingBoxB = h1ElementB.getBoundingClientRect();
  //     setWidth(boundingBox.width + 100);
  //     setWidthB(boundingBoxB.width);
  //   }
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowText(true);
  //   });

  //   setTimeout(() => {
  //     setShowText(false);
  //     setheartbeat(true);
  //   }, 3000);
  //   setTimeout(() => {
  //     setheartbeat(false);
  //   }, 4000);
  // }, []);

return (
      <div style={{position:"relative"}}>
        <div className='h1container'>

  
        <h1 className='selectDisable' >
            <span className='spanTitle'>AURÉLIE CEDIA
              </span><br/>
            <span>DÉVELOPPEUSE WEB      
             </span>
             {/* <div style={{width:'70vw'}} >
             {isNightMode? 
              <img className="aureWeb selectDisable" src={Aure} alt='Aurélie CEDIA transparent'/>:
              <img className="aureWeb selectDisable" src={AureDark} alt='Aurélie CEDIA transparent'/>}
              
              </div>  */}
        </h1>
        <div className='hideh1'></div>
        </div>
        <div className='aurelieTop'  style={{backgroundImage: `url(${AureTop})`}}>       </div> 
             <div className='aurelieBottom'  style={{backgroundImage: `url(${AureBottom})`}}></div>
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