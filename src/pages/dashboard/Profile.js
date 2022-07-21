import Wrapper from "../../assets/wrappers//DashboardFormPage"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { FormRow } from "../../components"
import { updateUser } from "../../features/user/userSlice"

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  })

  const handleSubmit = (event) => {
    const { name, email, location, lastName } = userData
    event.preventDefault()
    if (!name || !email || !lastName || !location) {
      toast.error("please fillout all fields")
      return
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setUserData({ ...userData, [name]: value })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            labeltext='First Name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            labeltext='Last Name'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile
