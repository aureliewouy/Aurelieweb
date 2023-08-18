import AureWeb from "../medias/AureliePhoto.jpg";


import '../css/biosection.css';
function BioSection() {
    return (
        <div className="biosection ease-in-out">
            <div>
            <img  className="biophoto" src={AureWeb}>
                
            </img>
            {/* <div className="wouyyan">
                <p>匯欣</p>
            </div> */}
            </div>
            <p>Hey, je suis Aurélie<br/> et je relève actuellement un défi à l'aube de mes 28 ans. Mon terrain de jeu ? Paris ! Mon expérience en startup a duré plus d'un an, en mode fullstack et devops. Imaginez, je touchais à tout, même à la machine à café. Mais, tiens-toi bien, une révélation : j'ai un faible pour le front-end. Alors devine où je m'oriente maintenant ? Tout droit vers ce terrain captivant ! 😉</p>
        </div>
    );
}
export default BioSection