
import {ReactComponent as Logo} from '../medias/logo-web.svg'
import {ReactComponent as LogoDark} from '../medias/logo-dark.svg'
import '../css/header.css';
import '../App.css';
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/themeaction';

const HeaderNav = ({ isNightMode, toggleTheme }) => {

    return (
        <nav className=' headerNav'>
            <div>
                {isNightMode?  <Logo  className='logo'/> :   <LogoDark  className='logo'/>}
            </div>
            <div className={`clickable ${isNightMode ? '.night-mode-no-bg ' : '.day-mode-no-bg '}`}>
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
                    <a href='#TEST'>Music</a>
                    <a href='#TEST'>Series</a>
                    <a href='#TEST'>Games</a>
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