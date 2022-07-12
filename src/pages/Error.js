import React from "react"
import { Link } from "react-router-dom"
import img from "../assets/images/not-found-nc.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <h3>Ouch! Page is not found!</h3>
        <p>we cant seem to find the page you requested</p>
        <img src={img} alt='not found' />
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
