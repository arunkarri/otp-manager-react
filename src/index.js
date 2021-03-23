import React, { useState } from 'react'
import env from './env'
import validator from 'validator'

export const ReactOTPGenerator = (props) => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')

  async function getOtp() {
    const data = {
      email,
      label: props.label === undefined ? 'OTP Manager' : props.label
    }

    const req = await fetch(`${env}otp/generate`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
  }

  async function verifyOtp() {
    const data = {
      email,
      otp
    }

    const req = await fetch(`${env}otp/verify`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json()
    props.action(res)
  }

  return (
    <div className={props.mainContainerClass}>
      <div className={props.emailContainerClass}>
        <label htmlFor='otpEmail'>{props.emailLabel}</label>
        <input
          id='otpEmail'
          className={props.emailFieldClass}
          type='email'
          placeholder='Enter your email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={props.getBtnRowClass}>
        <button
          type='button'
          className={props.getBtnClasses}
          onClick={getOtp}
          disabled={!validator.isEmail(email)}
        >
          {props.getBtnLabel === undefined ? 'Send Otp' : props.getBtnLabel}
        </button>
      </div>
      <div className={props.otpContainerClass}>
        <label htmlFor='otpField'>{props.otpLabel}</label>
        <input
          id='otpField'
          className={props.otpFieldClass}
          type='number'
          placeholder='Enter OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <div className={props.verifyBtnRowClass}>
        <button
          type='button'
          className={props.verifyBtnClasses}
          onClick={verifyOtp}
          disabled={!validator.isEmail(email) || otp.length !== 6}
        >
          {props.verifyBtnLabel === undefined
            ? 'Verify OTP'
            : props.verifyBtnLabel}
        </button>
      </div>
    </div>
  )
}
