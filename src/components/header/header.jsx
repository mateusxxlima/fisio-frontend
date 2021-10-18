import React, { memo } from "react";

import './headerStyles.scss'
import { FaBars, FaChild, FaHeartbeat,FaUserMd } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <nav>
        <div className="container-nav">
          <div className="nav-logo">
            <h1>Juliano Fritzen fisioterapia</h1>
            <FaChild/>
            <FaHeartbeat/>
            <FaUserMd/>
          </div>
          <div className="nav-menu">
              <FaBars/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header)