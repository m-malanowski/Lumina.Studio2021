import React from "react";
import { useEffect, useState, useRef } from "react";
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import { motion, useAnimation } from "framer-motion";

const ImagePlaceholder = ({ position, color }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.8,
        ease: ["easeOut",],
        times: [0, 0.7, 1]
      }
    });
  }, [position]);

  const style = position ? position.style : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      style={{ background: color, ...style }}
      className="placeholder"
    />
  );
};



const ProjectsSubsection = () => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 }
  }).current;




  return (
    <>
      <section className="section-more-projects"
               // onMouseMove={e => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
               onMouseMove={e => console.log(mouseInfo.now =  { x: e.pageX, y: e.pageY })}
      >
        <div className="images">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Factivewear-3.jpg?alt=media&token=45174749-6fc9-4a23-b671-4fba4ca2d0f6"
            alt="activewear" data-image="activewear" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fbeach-wear.jpg?alt=media&token=e21ab7bb-0ca3-4780-9243-25c0484e89a8"
            alt="beachwear" data-image="beachwear" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fdresses.jpg?alt=media&token=0cad3820-b2c9-43a0-8503-66eb81db7dab"
            alt="dresses" data-image="dresses" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fheels.jpg?alt=media&token=e8a42ce6-3242-4f27-9c24-404b3c0eaf15"
            alt="heels" data-image="heels" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fjoggers.jpg?alt=media&token=6ba10dcd-a0dd-4417-a4f8-ebe22c6c0ab6"
            alt="joggers" data-image="joggers" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fkimonos.jpg?alt=media&token=d15cc8fb-3757-4b1f-9db0-2e40256ec57e"
            alt="kimonos" data-image="kimonos" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Ftops.jpg?alt=media&token=2166f492-082c-4d80-bfad-ed5eae3aff99"
            alt="tops" data-image="tops" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hashnode-tutorials.appspot.com/o/image-hover-tutorial%2Fsuits-and-tailoring.jpg?alt=media&token=89a1b2e6-f222-4d4a-83b2-0b224869d661"
            alt="suits" data-image="suits" />
        </div>


        <div className="subsec-header">
          <TriggerText threshold=".5" delay=".5">
            <h5 className="">03.</h5>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">Works</h2>
          </TriggerText>
        </div>

        <div className="more-projects-single mt-5" data-label="dresses">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2019</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Antyegzekucja</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Banding </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" data-label="heels">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2020</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Carra</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Strategy </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" >
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2020</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Radca prawny tomczak</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign, Branding </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" data-label="joggers">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2021</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Antyegzekucja</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign </p>
          </TriggerText>
        </div>

        <div className="more-projects-single" data-label="kimonos">
          <TriggerLine threshold=".5" delay=".5">
            <hr className="animated" />
          </TriggerLine>
          <div className="more-left">
            <TriggerText threshold=".5" delay=".5">
              <span>2021</span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <h5>Odszkodowania</h5>
            </TriggerText>
          </div>
          <TriggerText threshold=".5" delay=".5">
            <p className="more-right"> Webdesign </p>
          </TriggerText>
        </div>

        <TriggerLine threshold=".5" delay=".5">
          <hr className="animated" />
        </TriggerLine>

        <div className="learn-more">
          <a href="/portfolio">
            <span>Zobacz</span>
            <span />
            <span>Wszystkie</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default ProjectsSubsection
