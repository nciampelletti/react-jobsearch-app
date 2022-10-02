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
            <span>Natalia</span> Job <span>tracker</span>
          </h1>
          <p>
            If you have trouble organizing your job-search process, then this
            Job Tracker just might be the app you've been looking for. Job
            Tracker aggregates job listings, so you can search for openings by
            keyword and location. Then — and this is where Job Tracker is unique
            — you can categorize jobs by priority: dream jobs, second-choice
            jobs, and third-choice jobs. You can also file jobs into the various
            stages of the job-search process.
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
