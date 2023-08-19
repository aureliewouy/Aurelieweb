import AureWeb from "../medias/gameboy.png";


import '../css/biosection.css';
function BioSection() {
    return (
        <div className="biosection">
            <div className="slide-in">
            <img  className="biophoto" src={AureWeb}>
            </img>
            </div>
            <p  style={{textAlign: 'left'}} className="activeLeft">   Hey, je suis Aurélie,<br/>je relève actuellement un défi à l'aube de mes 28 ans sur Paris. Mon expérience en startup a duré plus d'un an, en mode fullstack et devops. Je touchais à tout, même à la machine à café. Mais, tiens-toi bien, une révélation : j'ai un faible pour le front-end. Alors devine où je m'oriente maintenant ? Tout droit vers ce terrain captivant ! 😉</p>
        </div>
    );
}
export default BioSection