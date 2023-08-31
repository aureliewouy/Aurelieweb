
import {ReactComponent as Logo} from '../medias/logo-web.svg'
import {ReactComponent as LogoDark} from '../medias/logo-dark.svg'
import '../css/header.css';
import '../App.css';
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/themeaction';

const HeaderNav = ({ isNightMode, toggleTheme }) => {

    return (
        <nav className='slide-in-top headerNav'>
            <div>
                {isNightMode?  <Logo  className='logo'/> :   <LogoDark  className='logo'/>}
            </div>
            <div className={`clickable ${isNightMode ? 'night-mode' : 'day-mode'}`}>
                <div >
                <a href="https://github.com/aureliewouy" className="cutlink" data-content="Github">
                <span className="cutlink-inner">Github</span>
                </a>
                    <p>•</p>
                    <a href="https://www.linkedin.com/in/aurelie-cedia-060248182" className="cutlink" data-content="Linkedin">
                <span className="cutlink-inner">Linkedin</span>
                </a>
                </div>
                <button  className="glow-on-hover"  onClick={toggleTheme}>
                    {isNightMode ? 'Light mode' : ' Dark mode'}
               </button>
                <div className='lastpart'>
                    <a href='#test'>Bio</a>
                    {/* <a href='#'>Music</a>
                    <a href='#'>Series</a>
                    <a href='#'>Games</a> */}
                </div>
            </div>
        </nav>
    );
}
const mapStateToProps = (state) => ({
    isNightMode: state.isNightMode,
  });
  
  const mapDispatchToProps = {
    toggleTheme,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);