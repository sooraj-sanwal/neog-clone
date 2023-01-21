import React, { useState, useEffect } from 'react'
import './header.scss';
import logo from '../../Assets/Images/img01.svg'
import burgericon from '../../Assets/Images/img02.svg'
import crossicon from '../../Assets/Images/img03.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [menuIcon , setMenuIcon] = useState(burgericon)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    if(menuIcon===burgericon)
    setMenuIcon(crossicon)
    else
    setMenuIcon(burgericon)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <>
      <div className='header'>
        <div>
          <h2>Admissions for neoG Camp 2023 is open now.</h2>
        </div>
        <div>
          <button> Login to Admission Portal</button>
        </div>
      </div>
      <nav>
          
        {(toggleMenu || screenWidth > 850) && (
          <ul className="list">
           <li className="items logo"> <Link to={"/"}onClick={toggleNav}><img src={logo} alt="" />
          </Link></li>
            <li className="items" onClick={toggleNav}> <Link to={"/"}>Home</Link></li>
            <li className="items"> <Link to={"/about"}onClick={toggleNav}>About</Link></li>
            <li className="items"><Link to={"/levelZero"}onClick={toggleNav}>levelZero</Link></li>
            <li className="items">  <Link to={"/levelOne"}onClick={toggleNav}>levelOne</Link></li>
            <li className="items"> <Link to={"/faq"}onClick={toggleNav}>FAQ</Link></li>

          </ul>
        )}
         

        <button onClick={toggleNav} className="btnburger"><img src={menuIcon}alt="" /></button>
      </nav>
    </>
  )
}

export default Header

