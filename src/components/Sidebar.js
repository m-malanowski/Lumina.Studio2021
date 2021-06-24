import React, { useRef, useEffect } from "react";
import Links from "../constants/links"
import Socials from "../constants/socialLinks"
import orbitMain from "../assets/icons/orbitMain.png";
import { Link } from "gatsby"
import { gsap } from "gsap";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

const Sidebar = ({toggleSideBar, isOpen}) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);


  useEffect(() => {
    if (isOpen === false) {

      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      isOpen === true ||
      (isOpen === true && isOpen.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1.current, line2.current, line3.current, line4.current);
    }
  }, [isOpen]);


  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              {/*<Links styleClass="sidebar-links"/>*/}
              <nav>
                <ul>
                  {/*<li>*/}
                  {/*  <Link*/}
                  {/*    to='/about'*/}
                  {/*    className={"social-link link link--kale link--kale-big"}*/}
                  {/*  >*/}
                  {/*    Nasze studio*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      onClick={toggleSideBar}
                      ref={el => (line1.current = el)}
                      to='/about'
                      className={"social-link link link--kale"}
                    >
                      Nasze studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      onClick={toggleSideBar}
                      ref={el => (line2.current = el)}
                      to='/uslugi'>
                      Usługi
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      onClick={toggleSideBar}
                      ref={el => (line3.current = el)}
                      to='/blog'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      onClick={toggleSideBar}
                      ref={el => (line4.current = el)}
                      to='/contact'>
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>

              <div className='locations'>
                <p>Socials:</p>
                <Socials/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar