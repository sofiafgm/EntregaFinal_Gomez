import React from 'react';
import fb from '../../assets/fb.svg';
import ig from '../../assets/ig.svg';
import tiktok from '../../assets/tiktok.svg';
import youtu from '../../assets/youtu.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container-fluid bg-black text-white">
      <div className="row align-items-center">
        <nav className="col-auto container-fluid m-0 p-2">
          <ul className="nav row gx-1">
            <li className="col-auto">
              <a href="https://www.instagram.com/uncaosorganizado/">
                <img src={ig} 
                alt="Instagram" width="32" height="32" />
              </a>
            </li>

            <li className="col-auto">
              <a href="https://www.facebook.com/uncaosorganizado/">
              <img src={fb} alt="Facebook" width="32" height="32" />
              </a>
            </li>

            <li className="col-auto">
              <a href="https://vm.tiktok.com/ZMND4HE5D/">
              <img src={tiktok} alt="TikTok" width="32" height="32" />
              </a>
            </li>

            <li className="col-auto">
              <a href="https://youtube.com/channel/UCLNAMju5gtRDfbFgOSAlh2w">
              <img src={youtu} alt="Youtube" width="32" height="32" />
              </a>
            </li>
          </ul>
        </nav>

        <p className="d-flex col-auto ms-auto my-0 h6">Copyright © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
