import React from "react"
import globe from "../assets/icons/globe.svg"
import star from "../assets/icons/star.svg"
import starSm from "../assets/icons/starSmall.svg"
import arrow from "../assets/icons/right-arrow.svg"
import orbitProcess from "../assets/icons/orbitProcess.png"
import orbitAbout from "../assets/icons/orbitAbout.png";
import orbitMain from "../assets/icons/orbitMainView.png";
import handDown from "../assets/icons/handDown.svg"
import thumbUp from "../assets/icons/thumbUp.svg"
import arrowDown from "../assets/icons/arrowDown.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"


import mickeyMain from "../assets/imgs/mickey-main3.gif"
import carra from "../assets/imgs/carra.jpg"
import drewstal from "../assets/imgs/drewstal.jpg"
import adwokat from "../assets/imgs/adwokat.jpg"
import lightSingle from "../assets/icons/light-single.svg"
import clover from "../assets/icons/clover.svg"
import starThin from "../assets/icons/starThin.svg"

import { graphql } from "gatsby"
import Worldwide from "../components/Worldwide"
import Footer from "../components/Footer"
import MainScene3 from "../components/MainScene3"
import SocialLinks from "../constants/socialLinks"
import ServicesSlider from "../components/ServicesSlider"
import orbitAboutPage from "../assets/icons/orbitAboutPage.png"
import smallStar from "../assets/icons/smallStar.svg"
// import Layout from "../components/Layout"
// import Hero from "../components/Hero"
// import Services from "../components/Services"
// import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
export default () => {
  return (
    <>
      <main className="index-page container-fluid">
          {/*<MainScene3/>*/}
        <section className="section-main-container">
          {/*<div className="main-container">*/}
          {/*  <h2 className="subsec-title">*/}
          {/*    <span>wayfarers glossier</span>*/}
          {/*    <span>knausgaard</span>*/}
          {/*    <span>Shoreditch</span>*/}
          {/*  </h2>*/}
          {/*  <p>Adaptogen cardigan pop-up mumblecore, wolf scenester jianbing small batch chartreuse typewriter edison bulb pug etsy</p>*/}
          {/*  <img className="orbit" width="900" src={orbitMain} alt="" />*/}
          {/*</div>*/}
          <div className="main-container">
            <div>
              <h5 className="">01.</h5>
              <h2 className="subsec-title">
                <span>meggings   </span>
                <span>food truck</span>
                <span>Shoreditch</span>
              </h2>
            </div>
            <p className="mt-5">Adaptogen cardigan pop-up mumblecore, wolf scenester jianbing small batch chartreuse typewriter edison bulb pug etsy. Crucifix salvia stumptown fingerstache migas, snackwave mustache authentic ramps everyday carry forage skateboard taiyaki pop-up tumblr.</p>
            <img className="orbit" width="900" src={orbitMain} alt="" />
            <img className="small-star" width="50" src={smallStar} alt="" />
          </div>
          <div className="scroll-down">
            {/*<img width="100" src={arrowDown} alt="" />*/}
            {/*<img width="100" src={arrowDown} alt="" />*/}
            <img width="70" src={arrowDown} alt="" />
            {/*<img width="150" src={handDown} alt="" />*/}
          </div>
        </section>

          {/*<div className="bg-circles-main">*/}
          {/*  <div className="blurry-circle bc-1"/>*/}
          {/*  /!*<div className="blurry-circle bc-2"></div>*!/*/}
          {/*  <div className="blurry-circle bc-3"/>*/}
          {/*</div>*/}

        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>
            {/*<div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>*/}
          </div>
        </section>

        <section className="section-main-about">
          <div className="main-about-container">
            <div className="subsec-header">
              <h5 className="">02.</h5>
              <h2 className="subsec-title">About</h2>
            </div>
            <div className="subsec-body">
              <div className="ss-body-first">
                <img className="orbit" width="800" src={orbitAbout} alt="" />
              </div>
              <div className="ss-body-second">
                <p>Distillery type write brunch wayfarers letter press hammock meggings food truck hell o edison  bulb forage. Man on the   <em> polaroid </em> thundercats hashtae subway tile. </p>
                <span>Who we are</span>
              </div>
            </div>

            <div className="main-about-services">
              <div>
                <h3>Branding</h3>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
              </div>
              <div>
                <h3>Web <br/> dev</h3>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
              </div>
              <div>
                <h3>Digital</h3>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
              </div>
              <div>
                <h3>Social <br/> media</h3>
                <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
              </div>
            </div>

            <div>
              <img className="service-stickers" width="100%" src={serviceStickers} alt="" />
            </div>

          </div>
        </section>

        {/*<section className="">*/}
        {/*  <ServicesSlider/>*/}
        {/*</section>*/}



        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            {/*<div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span><span>Work</span><span>Work</span> </span></div>*/}
            {/*<div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>*/}
          </div>
        </section>

        <section className="section-more-projects">
          <div>
            <div className="subsec-header">
              <h5 className="">03.</h5>
              <h2 className="subsec-title">Works</h2>
            </div>
            {/*<div className="subsec-body">*/}
            {/*  /!*<div className="ss-body-first"/>*!/*/}
            {/*  <div className="ss-body-second">*/}
            {/*    <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
            {/*    <span>Things we made</span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="more-projects-single mt-5">
              <div className="more-left">
                <span>2019</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign, Banding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Carra</h5>
              </div>
              <p className="more-right"> Webdesign, Strategy </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Radca prawny tomczak</h5>
              </div>
              <p className="more-right"> Webdesign, Branding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Coś tam</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

          </div>

          <div className="learn-more">
            <a href="/portfolio">
              <span>Zobacz</span>
              <span/>
              <span>Wszystkie</span>
            </a>
          </div>
        </section>

        {/*<section className="section-main-works">*/}
        {/*  <div>*/}
        {/*    <div className="subsec-header">*/}
        {/*      <h5 className="">03.</h5>*/}
        {/*      <h2 className="subsec-title">Works</h2>*/}
        {/*    </div>*/}
        {/*    <div className="subsec-body">*/}
        {/*      /!*<div className="ss-body-first"/>*!/*/}
        {/*      <div className="ss-body-second">*/}
        {/*        <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
        {/*        <span>Things we made</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="main-works-container">*/}
        {/*      <div className="single-work">*/}
        {/*        <div>*/}
        {/*          <h5>01/</h5>*/}
        {/*          <h3>Carra</h3>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
        {/*          <div className="learn-more sw-right">*/}
        {/*            <a href="#">Sprawdź więcej</a>*/}
        {/*            <img width="30" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="single-work">*/}
        {/*        <div>*/}
        {/*          <h5>02/</h5>*/}
        {/*          <h3>Radca Prawny Tomczak</h3>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
        {/*          <div className="learn-more sw-right">*/}
        {/*            <a href="#">Sprawdź więcej</a>*/}
        {/*            <img width="30" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="single-work">*/}
        {/*        <div>*/}
        {/*          <h5>03/</h5>*/}
        {/*          <h3>Adwokat Mikulak</h3>*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
        {/*          <div className="learn-more sw-right">*/}
        {/*            <a href="#">Sprawdź więcej</a>*/}
        {/*            <img width="30" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<img width="200" src={handDown} alt="" />*/}
        {/*<img className="hand" width="200" src={thumbUp} alt="" />*/}

        <section className="section-marquee break-out">
          <div className="marquee-container">
            {/*<div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>*/}
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span></span></div>
            <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>   </span></div>
          </div>
        </section>

        <section className="section-main-process">
          <div className="">
            <div className="subsec-header">
              <h5 className="">04.</h5>
              <h2 className="subsec-title">Process</h2>
            </div>
            <div className="subsec-body">
              <div className="ss-body-second">
                <p>Distillery type write brunch wayfarers letter press hammockmeggings  food truck hell o tomy edison  <em>on the polaroid.  </em> Man osubway tile. </p>
                <span>How we do</span>

                <img className="orbit" width="600" src={orbitProcess} alt="" />

              </div>
              <div className="ss-body-first">
                <div className="single-process">
                  <h3>Briefieng</h3>
                  <p>Pok pok live-edge biodiesel gluten-free, dison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                  <div className="learn-more">
                    <a href="/single-project">
                      <span>Sprawdź</span>
                      <span/>
                      <span>Więcej</span>
                    </a>
                  </div>
                </div>

                <div className="single-process">
                  <h3>Design</h3>
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                  <div className="learn-more">
                    <a href="/single-project">
                      <span>Sprawdź</span>
                      <span/>
                      <span>Więcej</span>
                    </a>
                  </div>
                </div>

                <div className="single-process">
                  <h3>Implementation</h3>
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress.</p>
                  <div className="learn-more">
                    <a href="/single-project">
                      <span>Sprawdź</span>
                      <span/>
                      <span>Więcej</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>



        {/*<section className="section-main-works-marquee">*/}
        {/*  /!*<h2 className="big-section-title">Portfolio</h2>*!/*/}
        {/*  /!*<h5><em>Nasze </em> portfolio</h5>*!/*/}
        {/*  <h2 className="section-title"><span>Latest</span> <span>works</span></h2>*/}

        {/*  <div className="main-works-marquee-container">*/}
        {/*    <div><span className="marquee-span"> <span>Carra </span> <span>Carra </span> <img height="100" src={arrow} alt="" />  <img height="100" src={carra} alt="" />   <span>Carra </span> <span>Carra </span><span>Carra </span> <span>Carra </span> <span>Carra </span> </span></div>*/}
        {/*    <div><span className="marquee-span"> <span>Drewstal </span> <span>Drewstal </span> <img height="100" src={arrow} alt="" />  <img height="100" src={drewstal} alt="" /> <span>Drewstal </span> <span>Drewstal </span> <span>Drewstal </span> </span></div>*/}
        {/*    <div><span className="marquee-span"> <span>Radca Prawny Tomczak </span>  <img height="100" src={arrow} alt="" />  <img height="100" src={adwokat} alt="" /> <span>Radca Prawny Tomczak  </span> </span></div>*/}
        {/*    <div><span className="marquee-span"> <span>Adwokat Mikulak </span> <img height="100" src={arrow} alt="" />  <img height="100" src={carra} alt="" /> <span>Adwokat Mikulak  </span> <span>Adwokat Mikulak  </span> <span>Adwokat Mikulak  </span> </span></div>*/}

        {/*  </div>*/}
        {/*</section>*/}



        {/*<section className="section-main-about">*/}
        {/*  <div className="main-about-container">*/}
        {/*    /!*<h5>Kim jesteśmy?</h5>*!/*/}
        {/*    /!*<h2 className="section-title"><span>Czym się <br/></span> <span>zajmujemy</span></h2>*!/*/}
        {/*    <p className="pc-description"> A illo ipsum iusto neque nisi nobis repellendus veniam. Aspernatur beatae enim iste nihil odio officia  saepe voluptate! Lorem ipsum dolor sit amet, consectetur adiping elit. Aliquam asperiores consectetur  sici:<br/> aspernatur at aut.</p>*/}
        {/*    /!*<h5>O Lumina</h5>*!/*/}
        {/*    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis dolores esse in quas quod ratione. Aut consequuntur eveniet facilis fuga illum, incidunt ipsam, iste labore nesciunt ratione saepe voluptatibus.</p>*/}
        {/*    /!*<img src={starThin} width="350" alt="" />*!/*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<section className="section-main-squares break-out">*/}
        {/*  <div className="grid-container">*/}
        {/*    <div className="item1">1</div>*/}
        {/*    <div className="item2">2</div>*/}
        {/*    <div className="item3">3</div>*/}
        {/*    <div className="item4">4</div>*/}
        {/*    <div className="item5">5</div>*/}
        {/*    <div className="item6">6</div>*/}
        {/*    <div className="item7">7</div>*/}
        {/*    <div className="item8">8</div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className="section-main-squares-2 break-out">*/}
        {/*</section>*/}

        {/*<section className="section-main-works">*/}
        {/*  <div className="main-works-container">*/}
        {/*    <h5>Nasz proces</h5>*/}
        {/*    /!*<h2 className="subsec-title">Our latest projects</h2>*!/*/}
        {/*    <div className="main-works">*/}
        
        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Kogi mustache</h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        
        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3> Distillery glossier </h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        
        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Copper mug</h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        
        {/*      <div className="single-work-container break-out">*/}
        {/*        <div className="single-work container-fluid">*/}
        {/*          /!*<hr/>*!/*/}
        {/*          <div class="sw-left"><h3>Ramps vape </h3></div>*/}
        {/*          <div class="sw-right">*/}
        {/*            <p> Visual identity, web design, branding </p>*/}
        {/*            <img width="40" src={arrow} alt="" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}


        {/*<section>*/}
        {/*  <div className="main-container-marquee break-out">*/}
        {/*    <div><span className="marquee-span"> <span>Branding</span> <span>Web design</span> <span>Visual identity</span>  <span>Social media</span>  <span>Welcome</span><span>Elo Elo 3-2-0</span>  <span>Cześć</span><span>Ciao!</span><span>Benvenuto</span><span>Guten Morgen</span><span>Bon dia</span><span>Bonjour</span></span></div>*/}
        {/*  </div>*/}
        {/*</section>*/}


        {/*<section className="section-skew-marquee break-out">*/}
        {/*  <div className="marquee-container">*/}
        {/*    /!*<div><span className="marquee-span">Branding  Branding  Branding  Branding </span></div>*!/*/}
        {/*    <div><span className="marquee-span">Webdesign | Webdesign | Webdesign | Webdesign |  </span></div>*/}
        {/*    <div><span className="marquee-span">Visual identity | Visual identity | Visual identity | </span></div>*/}
        {/*    <div><span className="marquee-span">Usługi | Usługi | Usługi | Usługi |</span></div>*/}
        {/*  </div>*/}
        {/*</section>*/}


        {/*<section className="section-main-services">*/}
        {/*  <div className="main-services-container">*/}
        {/*    <ul>*/}
        {/*      <li><img src={starSm} width="50" alt="Agencja interaktywna" /></li>*/}
        {/*      <li><h4>Web development</h4></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Strony www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Sklepy internetowe</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Wdrażanie platform CMS</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Technologie mobilne i webowe</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Sklepy internetowe</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*    </ul>*/}

        {/*    <ul>*/}
        {/*      <li><img src={starSm} width="50" alt="Agencja interaktywna" /></li>*/}
        {/*      <li><h4 className="break">Branding</h4></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Strategia w komunikacji</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Naming & identity</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Content direction</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Brand experiences</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*    </ul>*/}

        {/*    <ul>*/}
        {/*      <li><img src={starSm} width="50" alt="Agencja interaktywna" /></li>*/}
        {/*      <li><h4>Visual identity</h4></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Projektowanie graficzne</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*    </ul>*/}

        {/*    <ul>*/}
        {/*      <li><img src={starSm} width="50" alt="Agencja interaktywna" /></li>*/}
        {/*      <li><h4>Social media</h4></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Projektowanie  www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Projektowanie graficzne www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >strony www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*      <li className="main-ss"><a href=""><h5 >Projektowanie  www</h5> <img height="25" src={arrow} alt="" /></a></li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</section>*/}
        <section className="section-more-projects">
          <div>
            <div className="subsec-header">
              <h5 className="">03.</h5>
              <h2 className="subsec-title">Works</h2>
            </div>
            {/*<div className="subsec-body">*/}
            {/*  /!*<div className="ss-body-first"/>*!/*/}
            {/*  <div className="ss-body-second">*/}
            {/*    <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. <em>Slow-carb tofu wolf, ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
            {/*    <span>Things we made</span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="more-projects-single mt-5">
              <div className="more-left">
                <span>2019</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign, Banding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Carra</h5>
              </div>
              <p className="more-right"> Webdesign, Strategy </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Radca prawny tomczak</h5>
              </div>
              <p className="more-right"> Webdesign, Branding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Coś tam</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

          </div>

          <div className="learn-more">
            <a href="/portfolio">
              <span>Zobacz</span>
              <span/>
              <span>Wszystkie</span>
            </a>
          </div>
        </section>
        <Worldwide/>

        <section className="section-marquee break-out">
          <div className="marquee-container">
            <div className="first-tape"><span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> <span>Together</span> </span></div>
            <div className="second-tape"><span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span></span></div>
            <div className="third-tape"><span> <span>Lumina</span>    <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span>   </span></div>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}
// ...GatsbyImageSharpFluid
