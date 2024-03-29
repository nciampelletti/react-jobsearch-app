import React from "react"
import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa"
import { Logo } from "../components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar, clearStore } from "../features/user/userSlice"

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  const toggleShowLogout = () => {
    setShowLogout((oldValue) => !oldValue)
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>{`My Dashboard`}</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={toggleShowLogout}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          {showLogout && (
            <div className={`dropdown ${showLogout ? "show-dropdown" : ""}`}>
              <button
                type='button'
                className='dropdown-btn'
                onClick={() => dispatch(clearStore("Logging out..."))}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
