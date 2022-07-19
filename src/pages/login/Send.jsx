import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import firebaseApp from '../../services/firebase/firebase'
import ModalVariant1 from '../../components/layouts/ModalVariant1'
import TextError from '../../components/common/TextError'
import check from '../../assets/images/check.jpg'
import TextMessage from '../../components/common/TextMessage'

const auth = getAuth(firebaseApp)

const EmailSend = () => {
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(null)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleReSend = async () => {
    await sendPasswordResetEmail(auth, email).then(() => {
      navigate('/login', { replace: true })
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        handleShow()
      })
      .catch(() => {
        setError('Wrong Credentials')
        setTimeout(() => setError(null), 5000)
      })
  }
  return (
    <>
      <ModalVariant1
        show={show}
        handleClose={handleClose}
        image={
          <img
            src={check}
            style={{ width: '100px', opacity: '0.8', padding: '5px' }}
          ></img>
        }
        title={
          <h2 className="text-pr text-3xl ">
            Done, we will send you the email
          </h2>
        }
        link={
          <Link
            to="/login"
            className="font-medium text-pr hover:text-green-700 underline"
          >
            {' '}
            &gt; Back to login
          </Link>
        }
        description={
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-normal text-center py-2 mt-10">
              You can now recover y by entering the email we sent to {email}
            </p>
            <p className="text-gray-500 text-normal text-center py-2 mt-10">
              Didn&apos;t you receive the email?
            </p>
            <i
              className="font-medium text-pr hover:text-green-700 underline"
              onClick={handleReSend}
            >
              Retry
            </i>
          </div>
        }
      />
      <div className="   w-full mt-32 mb-44">
        <div className="flex w-full items-center flex-col  justify-center">
          <div className=" text-center w-full">
            <h1 className=" text-3xl font-medium text-gray-700">
              Forgot your password?
            </h1>
            <p className=" text-gray-500 pt-2">
              We will send you a recovery email.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-full lg:w-1/3 p-2 lg:p-0 pt-5"
          >
            <div className=" flex flex-col gap-2 pt-6">
              <p className=" text-gray-800 text-sm">Enter your email</p>
              <input
                required
                type="email"
                className=" py-3 px-2 text-base border rounded-md font-normal outline-none focus:shadow-md text-gray-700"
                value={email}
                onChange={handleEmail}
                autoComplete="off"
              />
            </div>
            <TextMessage />
            <TextError message={error} test={error} />
            <button
              type="submit"
              className="relative py-3 flex items-center justify-center text-white bg-pr rounded-md w-full mt-5 hover:bg-green-600"
            >
              Send
            </button>
            <p className="text-gray-500 text-normal text-center py-2 mt-10">
              <Link
                to="/login"
                className="font-medium text-pr hover:text-green-700 underline"
              >
                <i> &gt; Go back</i>{' '}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmailSend
