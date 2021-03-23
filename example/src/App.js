import React from 'react'

import { ReactOTPGenerator } from 'otp-manager-react'
import 'otp-manager-react/dist/index.css'

const App = () => {
  function callback(res) {
    console.log('callback function')
    console.log(res)
  }
  return (
    <ReactOTPGenerator
      label='My OTP Manager Company'
      mainContainerClass='container'
      emailContainerClass='form-group'
      emailLabel='Email'
      emailFieldClass='form-control mb-3 mt-3'
      otpContainerClass='form-group'
      otpLabel='OTP'
      otpFieldClass='form-control'
      getBtnRowClass='text-center mb-1 mt-3'
      getBtnClasses='btn btn-info'
      getBtnLabel='Get OTP'
      verifyBtnRowClass='text-center'
      verifyBtnClasses='btn btn-success'
      verifyBtnLabel='Verify OTP'
      action={callback}
    />
  )
}

export default App
