import '../css/btnCv.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { SlowMo, Elastic } from 'gsap/all';

function BtnCv() {
  useEffect(() => {
    // Sélectionnez tous les éléments avec la classe "button--bubble"
    const buttons = document.querySelectorAll('.button--bubble');
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    buttons.forEach((button) => {
      // Sélectionnez les cercles en haut à gauche et en bas à droite
      const circlesTopLeft = button.parentElement.querySelectorAll('.circle.top-left');
      const circlesBottomRight = button.parentElement.querySelectorAll('.circle.bottom-right');

      // Animation pour les cercles en haut à gauche
      gsap.to(circlesTopLeft, {
        duration: 1.2,
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });

      gsap.fromTo(
        circlesTopLeft[0],
        { scale: 0.2, x: '+=6', y: '-=2' },
        { scale: 0, x: '-=5', y: '-=15', opacity: 0, duration: 1 }
      );

      gsap.fromTo(
        circlesTopLeft[1],
        { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' },
        { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0, duration: 1 },
        '-=1'
      );

      gsap.fromTo(
        circlesTopLeft[2],
        { scale: 0.2, x: '-=15', y: '+=6' },
        { scale: 0, x: '-=15', y: '+=5', opacity: 0, duration: 1 },
        '-=1'
      );

      // Animation pour les cercles en bas à droite
      gsap.set(circlesTopLeft, { x: 0, y: 0, rotation: -45 });

      gsap.to(circlesBottomRight, {
        duration: 1.1,
        x: 30,
        y: 30,
        ease: SlowMo.ease.config(0.1, 0.7, false),
      });

      gsap.fromTo(
        circlesBottomRight[0],
        { scale: 0.2, x: '-=6', y: '+=3' },
        { scale: 0, x: '+=5', y: '+=15', opacity: 0, duration: 1 }
      );

      gsap.fromTo(
        circlesBottomRight[1],
        { scale: 0.8, x: '+=7', y: '+=3' },
        { scale: 0.4, x: '+=7', y: '+=7', opacity: 0, duration: 1 },
        '-=1'
      );

      gsap.fromTo(
        circlesBottomRight[2],
        { scale: 0.2, x: '+=15', y: '-=6' },
        { scale: 0, x: '+=15', y: '-=5', opacity: 0, duration: 1 },
        '-=1'
      );

      gsap.set(circlesBottomRight, { x: 0, y: 0, rotation: 45 });

      // Créez la timeline principale
      const btTl = gsap.timeline({ paused: true });
      btTl.add('start')
        .add(tl, 'start')
        .add(tl2, 'start')
        .to(button.parentElement.querySelectorAll('.button.effect-button'), {
          scaleY: 1.1,
          duration: 0.8,
        }, 'start+=0.1')
        .to(button.parentElement.querySelectorAll('.button.effect-button'), {
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4),
          duration: 1.8,
        }, 'start+=1.2')
        .timeScale(2.6);

      // Ajoutez un gestionnaire d'événements pour la souris
      button.addEventListener('mouseover', function () {
        btTl.restart();
      });
    });
  }, []);


    return (
<div style={{marginBottom:'300px', marginTop:'-200px'}}>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo"/>
    </filter>
  </defs>
</svg>

<span className="button--bubble__container">
  <a href="#campaign" className="button button--bubble">
    Télécharge mon CV
  </a>
  <span className="button--bubble__effect-container">
    <span className="circle top-left"></span>
    <span className="circle top-left"></span>
    <span className="circle top-left"></span>

    <span className="button effect-button"></span>

    <span className="circle bottom-right"></span>
    <span className="circle bottom-right"></span>
    <span className="circle bottom-right"></span>
  </span>
</span>
</div>
    );
}
export default BtnCv