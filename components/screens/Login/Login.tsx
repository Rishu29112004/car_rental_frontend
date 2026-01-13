import React from 'react'
import LoginForm from './components/LoginForm'

const Login = () => {
  return (
    <div>
      <div>
        <h1 className='font-semibold text-xl text-blue-500'>User<span className='text-gray-500'>Login</span></h1>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
