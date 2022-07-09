import React from "react"
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main_1.svg"
import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            My job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis provident animi sequi. Temporibus non aut, sapiente
            repellat tempore sint incidunt corporis odit. Quod voluptatum alias
            aliquid molestias, cum, iure veritatis laudantium odit impedit error
            iusto dolores asperiores sint quam nulla ipsam tenetur, facere
            soluta illo natus aspernatur ipsa earum!
          </p>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
