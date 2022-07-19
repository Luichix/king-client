import React, {
  useState,
  useEffect,
  // useContext
} from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import firebaseApp from '../../services/firebase/firebase'
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
// } from 'firebase/auth'
// import LanguageContext from '../../contexts/LanguageContext'
import InputGroup from '../../components/common/InputGroup'
import Input, { emailHandler } from '../../components/common/Input'
import Password, { passwordHandler } from '../../components/common/Password'
import Load from '../../components/common/Load'
import styles from './Signup.module.css'
import { useInput } from '../../hooks/useInput'
// import { useMutation } from '@apollo/client'
// import { ADD_USER_INFO } from '../../services/graphql/mutation/user'
// import { adapterUser } from '../../utilities/adapters/formattedUser'
// import { useDispatch } from 'react-redux'
// import { modifyUser } from '../../redux/actions/user.actions'
import word from '../../data/signup.json'
import google from '../../../public/google.svg'
import Image from 'next/image'
import Title from '../../components/common/Title'

const Signup = () => {
  const texts = word['es']
  const email = useInput({
    name: 'email',
    type: 'text',
    placeholder: 'Entry your email',
    handlerMethods: emailHandler,
  })
  const password = useInput({
    name: 'password',
    type: 'password',
    placeholder: 'Entry your password',
    handlerMethods: passwordHandler,
  })

  // const router = useRouter()
  // const auth = getAuth(firebaseApp)
  // auth.useDeviceLanguage()
  // const { texts } = useContext(LanguageContext)
  // const [addUserInfo] = useMutation(ADD_USER_INFO)
  const [load, setLoad] = useState(false)
  // const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const signInWithGoogle = async (event) => {
    event.preventDefault()
    // await signInWithPopup(auth, provider)
    //   .then((result) => {
    //     setUser(result.user.uid)
    //     const adapter = adapterUserCredentials(result)
    //     dispatch(modifyUser(adapter))
    //     getInfo({ variables: { uid: result.user.uid } })
    //   })
    //   .catch((error) => {
    //     const errorCode = error.codes
    //     const errorMessage = error.message
    //     const email = error.email
    //     const credential = GoogleAuthProvider.credentialFromError(error)
    //     console.log(errorCode, errorMessage, email, credential)
    //     // FIXME: error handling
    //   })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (email.valid && password.valid) {
      setLoad(true)
        // createUserWithEmailAndPassword(auth, email.value, password.value)
        //   .then((response) => {
        //     sendEmailVerification(auth.currentUser)
        //     if (response.user) {
        //       const adapter = adapterUser(
        //         response.user.uid,
        //         name.value,
        //         email.value,
        //         phone.value,
        //         industry.value,
        //         employee.value
        //       )
        //       addUserInfo({ variables: adapter })
        //         .then(() => {
        //           dispatch(modifyUser(adapter))
        //           router.push('/')
        //         })
        //         .catch((error) => {
        //           console.log(error)
        //         })
        //     }
        //   })
        .catch((exception) => {
          console.log('error', exception)
        })
    }
  }

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.section}></div>
        <div className={styles.register}>
          <Title size="sm" color="primary">
            Registrarme!
          </Title>
          <form onSubmit={submitHandler} className={styles.form}>
            <InputGroup
              name={email.name}
              text={texts.emailRegister}
              message={email.message}
              valid={email.valid}
              info={email.info}
            >
              <Input {...email} />
            </InputGroup>
            <InputGroup
              name="Password"
              text={texts.passwordRegister}
              message={password.message}
              valid={password.valid}
              info={password.info}
            >
              <Password
                {...password}
                placeholder={texts.placePasswordRegister}
              />
            </InputGroup>
            <div className={styles.terms}>
              <p className={styles.text}>
                {texts.acceptRegister}{' '}
                <Link href="/privacy-policy">
                  <a className={styles.linkText}>{texts.termsRegister}</a>
                </Link>
              </p>
            </div>
            <button type="submit" className={styles.button}>
              {load && <Load />}
              {texts.buttonRegister}
            </button>
          </form>
          <p className={styles.text}>{texts.or}</p>
          <button onClick={signInWithGoogle} className={styles.buttonIcon}>
            <figure className={styles.icon}>
              <Image src={google} alt="google" />
            </figure>
            <p className={styles.text}>{texts.googleSignup}</p>
          </button>
          <p className={styles.text}>
            <i>{texts.accountRegister} </i>
            <Link href="/login">
              <a className={styles.linkText}>{texts.loginRegister}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
