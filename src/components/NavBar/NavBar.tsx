import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

import { CompanyFetch } from '../../types/typeApp';
import "./NavBar.css"


const NavBar = () => {



  const [state, setState] = useState<Boolean>(false)
  const [selectedOption, setSelectedOption] = useState<any>(null)

  const handleButton = () => {
    setState(!state)
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  console.log(navToggle)

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");
      // if(navMenu){
      //     navMenu.classList.toggle("nav-menu_visible");
      //     if (navMenu.classList.contains("nav-menu_visible")) {
      //       navToggle.setAttribute("aria-label", "Cerrar menú");
      //     } else {
      //       navToggle.setAttribute("aria-label", "Abrir menú");
      //     }
      // }
    });
  }

  return (

    <div className='container'>

      {state ? <>
        <header className="header">

          <nav className="nav">
            <Link className="logo nav-link" to="/">
              Logo
            </Link>

            <button className="nav-toggle" aria-label="Abrir menú">
              {/* <i className="fas fa-bars"></i> */}

              <FontAwesomeIcon
                icon={faBars}
                color='white'
                size='2x'
                style={{ cursor: 'pointer' }}
                onClick={() => handleButton()}
              />

            </button>

            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link className="nav-menu-link nav-link" to="ourCompany">
                <IonIcon className="IconSideBar" name="people-outline"></IonIcon>
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link className="nav-menu-link nav-link" to="ourCompany">
                <IonIcon className="IconSideBar" name="globe-outline"></IonIcon>
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link className="nav-menu-link nav-link nav-menu-link_active" to="/contact">
                <IonIcon className="IconSideBar" name="chatbubble-ellipses-outline"></IonIcon>
                </Link>
              </li>

            </ul>
          </nav>

        </header>
      </> : <>

      {/* aqui es cuando se aprieta el icono Hamburguesa */}
        
        <header className="header">
          <nav className="nav">
            <Link to="/" className="logo nav-link">
              Logo
            </Link>

           
            <button className="nav-toggle" aria-label="Abrir menú">
              {/* <i className="fas fa-bars"></i> */}

              <FontAwesomeIcon
                icon={faBars}
                color='white'
                size='2x'
                style={{ cursor: 'pointer' }}
                onClick={() => handleButton()}
              />

            </button>

            <ul className="nav-menu nav-menu_visible">
              <li className="nav-menu-item">
              
                <Link className="nav-menu-link nav-link" to="ourCompany">
                <IonIcon className="IconSideBar" name="people-outline"></IonIcon>

                </Link>
              </li>

              <li className="nav-menu-item">
                <Link className="nav-menu-link nav-link" to="ourCompany">
                <IonIcon className="IconSideBar" name="globe-outline"></IonIcon>
       
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link className="nav-menu-link nav-link nav-menu-link_active" to="/contact">
                <IonIcon className="IconSideBar" name="chatbubble-ellipses-outline"></IonIcon>

                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>}



    </div>
  )
}

export default NavBar;
