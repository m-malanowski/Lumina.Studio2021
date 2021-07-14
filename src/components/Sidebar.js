import React, { useRef, useEffect } from "react";
import Links from "../constants/links"
import Socials from "../constants/socialLinks"
import orbitMain from "../assets/icons/orbitMain.png";
import mickyHand1 from "../assets/imgs/starSmallBlack.svg"
import mickyHand2 from "../assets/imgs/cloverSmallBlack.svg"
import mickyHand3 from "../assets/imgs/smallStarBlack.svg"
import mickyHand4 from "../assets/imgs/redHotCross.svg"


import { Link } from "gatsby"
import { gsap } from "gsap";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  // staggerTextClose,
  // handleHover,
  // handleHoverExit,
  // handleCityReturn,
  // handleCity,
  staggerRevealClose
} from "./Animations";

const Sidebar = ({toggleSideBar, isOpen}) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  // let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let social = useRef(null);

  useEffect(() => {
    if (isOpen === false) {

      staggerRevealClose(reveal2, reveal1);
      // staggerTextClose(line1.current, line2.current, line3.current, line4.current);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      // gsap.to(line1.current, { duration: 1, css: { opacity: ".2" } });

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
      fadeInUp(social);
      staggerText(line1.current, line2.current, line3.current, line4.current);
    }
  }, [isOpen]);


  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu' >

      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>

        <div className='container-fluid break-out'>
          {/*<div className='wrapper'>*/}
          {/*  <div className='menu-links'>*/}

          {/*    /!*<Links styleClass="sidebar-links"/>*!/*/}
          {/*    <nav>*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <Link*/}
          {/*            onMouseEnter={e => handleHover(e)}*/}
          {/*            onMouseOut={e => handleHoverExit(e)}*/}
          {/*            onClick={toggleSideBar}*/}
          {/*            ref={el => (line1.current = el)}*/}
          {/*            to='/about'*/}
          {/*            className={"social-link link link--kale"}*/}
          {/*          >*/}
          {/*             Studio*/}
          {/*          </Link>*/}
          {/*        </li>*/}

          {/*        <li>*/}
          {/*          <Link*/}
          {/*            onMouseEnter={e => handleHover(e)}*/}
          {/*            onMouseOut={e => handleHoverExit(e)}*/}
          {/*            onClick={toggleSideBar}*/}
          {/*            ref={el => (line2.current = el)}*/}
          {/*            to='/uslugi'>*/}
          {/*            Usługi*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link*/}
          {/*            onMouseEnter={e => handleHover(e)}*/}
          {/*            onMouseOut={e => handleHoverExit(e)}*/}
          {/*            onClick={toggleSideBar}*/}
          {/*            to='/portfolio'*/}
          {/*            className={"social-link link link--kale"}*/}
          {/*          >*/}
          {/*            Prace*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link*/}
          {/*            onMouseEnter={e => handleHover(e)}*/}
          {/*            onMouseOut={e => handleHoverExit(e)}*/}
          {/*            onClick={toggleSideBar}*/}
          {/*            ref={el => (line3.current = el)}*/}
          {/*            to='/blog'>*/}
          {/*            Blog*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <Link*/}
          {/*            onMouseEnter={e => handleHover(e)}*/}
          {/*            onMouseOut={e => handleHoverExit(e)}*/}
          {/*            onClick={toggleSideBar}*/}
          {/*            ref={el => (line4.current = el)}*/}
          {/*            to='/kontakt'>*/}
          {/*            Kontakt*/}
          {/*          </Link>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </nav>*/}
          {/*    <div ref={el => (info = el)} className='info'>*/}
          {/*      <h3>Nasza misja</h3>*/}
          {/*      <p>*/}
          {/*        Na czas naszej współpracy jesteśmy Twoim zewnętrznym działem marketingu. Proponujemy*/}
          {/*        współpracę w oparciu o zaufanie. Stawiamy na wzajemne zaufanie i wsparcie zarówno podczas*/}
          {/*        jednorazowych zleceń, jak i długofalowej współpracy.*/}
          {/*      </p>*/}
          {/*    </div>*/}

          {/*    <div className='locations'>*/}
          {/*      <p>Socials:</p>*/}
          {/*      <Socials/>*/}
          {/*    </div>*/}

          {/*  </div>*/}
          {/*</div>*/}

          <nav className="menu">
            <div className="menu__item">
              <Link to="/o-nas" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line1.current = el)}

              >Studio</Link>
              {/*<a className="menu__item-link">Studio</a>*/}
              <img className="menu__item-img" src={mickyHand1} />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>Studio - Studio - Studio - Studio - Studio - Studio - Studio</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/portfolio" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line2.current = el)}
              >Projekty</Link>
              <img className="menu__item-img" src={mickyHand2} />
              <div className="marquee">
                <div className="marquee__inner">
							<span
              >Projekty - Projekty - Projekty - Projekty - Projekty - Projekty
								- Showcase</span
              >
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/uslugi" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line3.current = el)}
              >Usługi</Link>
              <img className="menu__item-img" src={mickyHand3}  />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>Usługi - Usługi - Usługi - Usługi - Usługi - Usługi - Usługi</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/kontakt" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line4.current = el)}

              >Kontakt</Link>
              <img className="menu__item-img" src={mickyHand4} />
              <div className="marquee">
                <div className="marquee__inner">
							<span
              >Kontakt - Kontakt - Kontakt - Kontakt - Kontakt - Kontakt - Kontakt</span>
                </div>
              </div>
            </div>

            <div ref={el => (social = el)} className='locations' >
              {/*<p>Śledź nas:</p>*/}
              <Socials/>
              <Link
                to="/blog"
                className="social-link  link link--kale"
                onClick={toggleSideBar}
                >BLOG</Link>
            </div>

          </nav>


        </div>
      </div>
    </div>
  );
}

export default Sidebar