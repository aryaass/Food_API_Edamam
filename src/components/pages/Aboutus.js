import React from "react";
import './AboutUs.css'
import test from './img/test.jpg'
import chris from './img/chris.jpg'
import jason1 from './img/jason1.jpg'
import facebook1 from './img/facebook1.svg'
import instagram1 from './img/instagram1.svg'
import github1 from './img/github1.svg'
import Ferry from './img/Ferry.jpg'

function AboutUs() {
    return (
      <div className="main">
        <div className="title">
        <h2>Crew</h2>
        <h2>Jagung Tusuk Keju</h2>
        </div>
        <div className="nyamping">

          <div className="card ">
            <div className="image-box">
              <img className="profile-image" src={test} alt="Avatar"/>
            </div>
              <div className="bottom">
                <div className="profile">
                  <div className="name">Aryasuta</div>
                  <div className="designation">00000037714</div>
                </div>
                <div className="social">
                  <div className="social-links">
                    <a href="https://www.facebook.com/aryasuta.saputra/">
                      <img src={facebook1} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/_sutaa/">
                      <img src={instagram1} alt="Instagram"/>
                    </a>
                    <a href="https://github.com/aryaass" >
                      <img src={github1} alt="Github"/>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          <div className="card ">
            <div className="image-box">
              <img className="profile-image" src={chris} alt="Avatar"/>
            </div>
              <div className="bottom">
                <div className="profile">
                  <div className="name">Christian Liyanto</div>
                  <div className="designation">00000033739</div>
                </div>
                <div className="social">
                  <div className="social-links">
                    <a href="https://www.facebook.com/christianliyanto">
                      <img src={facebook1} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/c_liyanto/">
                      <img src={instagram1} alt="Instagram"/>
                    </a>
                    <a href="https://github.com/Christian-Liyanto" >
                      <img src={github1} alt="Github"/>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          <div className="card ">
            <div className="image-box">
              <img className="profile-image" src={Ferry} alt="Avatar"/>
            </div>
              <div className="bottom">
                <div className="profile">
                  <div className="name">Ferry</div>
                  <div className="designation">00000034436</div>
                </div>
                <div className="social">
                  <div className="social-links">
                    <a href="https://www.facebook.com/ferry.salim.5855/">
                      <img src={facebook1} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/ferrysalim99/">
                      <img src={instagram1} alt="Instagram"/>
                    </a>
                    <a href="https://github.com/ferrysalim123" >
                      <img src={github1} alt="Github"/>
                    </a>
                  </div>
                </div>
              </div>
          </div>

          <div className="card ">
            <div className="image-box">
              <img className="profile-image" src={jason1} alt="Avatar"/>
            </div>
              <div className="bottom">
                <div className="profile">
                  <div className="name">Jason</div>
                  <div className="designation">00000035990</div>
                </div>
                <div className="social">
                  <div className="social-links">
                    <a href="https://www.facebook.com/solusea.jason/">
                      <img src={facebook1} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/jas_tandiono/">
                      <img src={instagram1} alt="Instagram"/>
                    </a>
                    <a href="https://github.com/JasonJT01" >
                      <img src={github1} alt="Github"/>
                    </a>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    );

}

export default AboutUs;
