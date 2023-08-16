
import {ReactComponent as Logo} from '../medias/logo-web.svg'
import '../css/header.css';
function HeaderNav() {

    return (
        <nav className='headerNav'>
            <Logo  className='logo'/>
            <div>
                <p>Github</p>
                <p>Linkedin</p>
            </div>
            <div>
                <p>Light mode</p>
            </div>
            <div>
                <p>Bio</p>
                <p>Music</p>
                <p>Series</p>
                <p>Games</p>
            </div>
        </nav>
    );
}
export default HeaderNav