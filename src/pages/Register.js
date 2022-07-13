import React from "react"
import { Logo } from "../components"
import { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import FormRow from "../components/FormRow"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setValues({ ...values, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)

    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) {
      console.log("Please fill out all fields")
    }
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <>
      <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo className='logo' />
          <h4>{values.isMember ? "Login" : "Register"}</h4>
          {/*name*/}
          {!values.isMember && (
            <FormRow
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          )}

          {/*email*/}
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          {/*password*/}
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
          <button type='Submit' className='btn btn-block'>
            Submit
          </button>
          <p>
            {values.isMember ? "Not a mamber yet?" : "Already a member?"}
            <button type='button' className='member-btn' onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>

        {values.isMember && (
          <div className='form'>
            <h5>Use test credentials or register:</h5>
            <div className='form-row'>
              <label className='form-label'>
                Email: <span>natashat@shaw.ca</span>
              </label>
            </div>
            <div className='form-row'>
              <label className='form-label'>
                Password: <span>qweqwwq</span>
              </label>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  )
}

export default Register
