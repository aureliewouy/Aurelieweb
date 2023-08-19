
import {ReactComponent as Logo} from '../medias/logo-web.svg'
import '../css/header.css';
import '../App.css';
function HeaderNav() {

    return (
        <nav className='slide-in-top headerNav'>
            <div>
            <Logo  className='logo'/>
            </div>
            <div className='clickable'>
                <div >
                <a href="https://github.com/aureliewouy"  target='_blank' className="cutlink" data-content="Github">
                <span className="cutlink-inner">Github</span>
                </a>
                    <p>•</p>
                    <a href="https://www.linkedin.com/in/aurelie-cedia-060248182"  target='_blank' className="cutlink" data-content="Linkedin">
                <span className="cutlink-inner">Linkedin</span>
                </a>
                </div>
                <div>
                <a href="#"  target='_blank' className="glow-on-hover">
                <span>Light mode</span>
                </a>
                </div>
                <div>
                    <a>Bio</a>
                    <a>Music</a>
                    <a>Series</a>
                    <a>Games</a>
                </div>
            </div>
        </nav>
    );
}
export default HeaderNav