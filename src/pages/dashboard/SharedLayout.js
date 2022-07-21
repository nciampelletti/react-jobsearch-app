import React from "react"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { Navbar, BigSidebar, SmallSidebar } from "../../components/"
import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dahsboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default SharedLayout
