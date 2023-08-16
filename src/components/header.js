import '../css/header.css';
import AureWeb from "../medias/webaure.svg";
function Header() {

    return (
      <div className="headerNameContainer">
        <h1>
            <span>AURÉLIE CEDIA </span>
            <span>DÉVELOPPEUSE WEB</span>
            <div>  <img className="aureWeb" src={AureWeb}/></div>
        </h1>
      </div>
    );
}
export default Header