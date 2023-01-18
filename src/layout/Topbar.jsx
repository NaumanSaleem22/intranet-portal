import React from 'react';
import { commonImages } from '../components/common/images';
import { FaBell, FaRegSun, FaQuestionCircle } from 'react-icons/fa';

function Topbar() {
  return (
    <div className='topBar'>
      <div className='logo-area'>
        <img src={commonImages.mainLogo} className='img-fluid' alt='Logo'/>
      </div>
      <div className=''>
        
        <ul>
          <li>
          <div className='switch'>
          <input id="language-toggle" className='check-toggle check-toggle-round-flat' type="checkbox" />
          <label htmlFor="language-toggle"></label>
         
          <span className="on">EN</span>
          <span className="off">AR</span>
          </div>
          </li>
          <li>
            <span><FaBell /></span>
          </li>
          <li>
            <span>
              <FaQuestionCircle />
            </span>
          </li>
          <li>

            <span>
              <FaRegSun />
            </span>
          </li>

          <li className='username'>
            TARIQ ALZAHRANI
            <span><img src={commonImages.avater} className='img-fluid' alt='user' /></span>
          </li>
          <li className='userImage'>
          <span><img src={commonImages.avater} className='img-fluid' alt='user' /></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar