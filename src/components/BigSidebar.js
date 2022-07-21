import React from "react"
import Wrapper from "../assets/wrappers/BigSidebar"

import Logo from "./Logo"
import { useSelector } from "react-redux"

import NavLinks from "./NavLinks"

const BigSidebar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user)

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSideBarOpen ? "" : "show-sidebar"}`}
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
