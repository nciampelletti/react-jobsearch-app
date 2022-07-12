import React from "react"

import main from "../assets/images/main_1.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            <span>Natalia</span> job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis provident animi sequi. Temporibus non aut, sapiente
            repellat tempore sint incidunt corporis odit. Quod voluptatum alias
            aliquid molestias, cum, iure veritatis laudantium odit impedit error
            iusto dolores asperiores sint quam nulla ipsam tenetur, facere
            soluta illo natus aspernatur ipsa earum!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
