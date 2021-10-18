import React from "react";

import './footerStyles.scss'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'

function Footer({className}) {
  return (
    <footer className={`${className}`}>
      <div className="container-footer">
        <div className="footer-copy">
          <small>&copy; Juliano Fritzen fisioterapia - Todos os direitos reservados, Example Corporation</small>
        </div>
        <div className="footer-meta">
          <ul className="meta-list">
            <li className="lit-item">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <BsWhatsapp />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <ImFacebook />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  )
}

export default Footer