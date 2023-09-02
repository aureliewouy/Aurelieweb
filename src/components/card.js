import "../css/contact.css";
import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ReactComponent as Logo } from "../medias/logo-web.svg";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

function CardGrab(props) {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const target = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    }),
  );

  const [wheelApi] = useSpring(() => ({ wheelY: 0 }));

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault();
        wheelApi.set({ wheelY: y });
      },
    },
    { target, eventOptions: { passive: false } },
  );

  const position = props.position;
  const deg = props.deg;
  const black = props.black;
  const bottom = props.bottom;
  const zIndex = props.zIndex;
  return (
    <div className="container">
      <animated.div
        ref={target}
        className={`${black ? "cardBlack" : "card"}`}
        style={{
          transform: "rotate(" + deg + "deg)",
          left: position + "%",
          bottom: bottom + "px",
          x,
          y,
          zIndex: zIndex ? -2 : 0,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <animated.div>
          <div className={"draggableCard"}>
            <h4>
              AURÉLIE <br />
              CEDIA
            </h4>
            <p>FRONTEND DEVELOPER</p>
            <p>
              <a href="mailto:urelie.cedia@gmail.com">
                aurelie.cedia@gmail.com
              </a>
            </p>
            <p>+33780384381</p>
            <Logo />
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
}
export default CardGrab;
