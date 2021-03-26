# otp-manager-react

> A highly customizable and easy to use OTP Generator and verifier in React JS. Just import the library and send your inputs. It will generate the OTP, send to backend, and verify it once submitted.
> The OTP Expires in 5 mins. Will customise this in future if required.

[![NPM](https://img.shields.io/npm/v/otp-manager-react.svg)](https://www.npmjs.com/package/otp-manager-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![image](https://user-images.githubusercontent.com/14010423/112599239-b241ce00-8e35-11eb-9073-b8d1d0fd1d9c.png)


## Github Repo

https://github.com/arunkarri/otp-manager-react

## Install

```bash
npm install --save otp-manager-react
```

## Demo

https://otp-manager-arun.netlify.app/

## Usage

```jsx
import React from 'react'

import { ReactOTPGenerator } from 'otp-manager-react'
import 'otp-manager-react/dist/index.css'

const App = () => {
  function callback(res) {
    console.log('callback function')
    console.log(res)
  }
  return (
    //Below example has bootstrap classes.
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

```

## Props

 | Prop name  | Purpose |
| ------------- | ------------- |
| label  | Product/Company name to be displayed in the From Field of the Email |
| mainContainerClass | Classes for the main Container of the fields |
| emailContainerClass | Classes for the email field container |
| emailLabel | Label to be displayed for the email field |
| emailFieldClass | Classes to be passed for the input Email field |
| otpContainerClass | Classes for the otp field container |
| otpLabel | Label to be displayed for the otp field |
| otpFieldClass | Classes to be passed for the input otp field |
| getBtnRowClass | Classes for the Get OTP Button Div |
| getBtnClasses | Classes for the Get OTP Button |
| getBtnLabel | Display label for the Get OTP Button |
| verifyBtnRowClass | Classes for the Verify OTP Button Div |
| verifyBtnClasses | Classes for the Verify OTP Button |
| verifyBtnLabel | Display label for the Verify OTP Button |
| action | callback function to be called after otp is verified |


## Donate
<p>
  <a href="https://www.paypal.me/arunkashyapkarri">
      <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" alt="paypal">
  </a>
</p>


## License
 
MIT © [](https://github.com/)


