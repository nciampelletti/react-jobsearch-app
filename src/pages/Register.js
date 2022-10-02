import React from "react"
import { Logo } from "../components"
import { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/RegisterPage"
import FormRow from "../components/FormRow"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { loginUser, registerUser } from "../features/user/userSlice"
import { useNavigate } from "react-router-dom"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setValues({ ...values, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
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
          <button type='Submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? "loading ..." : "submit"}
          </button>
          {/* <button
            type='button'
            className='btn btn-block btn-hipster'
            disable={isLoading}
            onClick={() => {
              dispatch(
                loginUser({ email: "testUser@test.com", password: "secret" })
              )
            }}
          >
            {isLoading ? "loading..." : "demo"}
          </button> */}
          <p>
            {values.isMember ? "Not a mamber yet?" : "Already a member?"}
            <button type='button' className='member-btn' onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>

        {values.isMember && (
          <div className='form'>
            <h5>You might use test credentials...</h5>
            <div className='form-row'>
              <label className='form-label'>
                Email: <span>test@test.com</span>
              </label>
            </div>
            <div className='form-row'>
              <label className='form-label'>
                Password: <span>test1234</span>
              </label>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  )
}

export default Register
