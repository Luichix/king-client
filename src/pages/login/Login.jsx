import React, {
  useState,
  useEffect,
  // useContext
} from 'react'
import styles from './Login.module.css'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
// import { modifyUser } from '../../redux/actions/user.actions'
// import firebaseApp from '../../services/firebase/firebase'
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from 'firebase/auth'
// import LanguageContext from '../../contexts/LanguageContext'
// import Load from '../../components/common/Load'
// import { adapterUserCredentials } from '../../utilities/adapters/formattedUser'
// import { useLazyQuery } from '@apollo/client'
// import { GET_USER_INFO } from '../../services/graphql/query/user'
// import { userInterceptor } from '../../utilities/interceptors/userInterceptor'
import Input from '../../components/common/Input'
import Password from '../../components/common/Password'
import google from '../../../public/google.svg'
import Image from 'next/image'
import word from '../../data/login.json'

const Login = () => {
  const texts = word['es']
  // const auth = getAuth(firebaseApp)
  // const provider = new GoogleAuthProvider()
  // const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [errorMsg, setErrorMsg] = useState(null)
  // const [load, setLoad] = useState(false)
  // const { texts } = useContext(LanguageContext)
  // const dispatch = useDispatch()
  // const router = useRouter()
  // const [getInfo, { loading, error, data }] = useLazyQuery(GET_USER_INFO)

  // useEffect(() => {
  //   if (user) {
  //     let result = userInterceptor({ loading, error, data, uid: user })

  //     if (result.uid !== '') {
  //       dispatch(modifyUser(result))
  //       router.push('/dashboard')
  //     }
  //   }
  // }, [data])

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    // try {
    //   setLoad(true)
    //   await signInWithEmailAndPassword(auth, email, password)
    //   router.push('/')
    // } catch (error) {
    //   setErrorMsg('Wrong Credentials')
    //   setLoad(false)
    //   setTimeout(() => setErrorMsg(null), 5000)
    // }
    // console.log(errorMsg)
  }
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2 className={styles.title}>{texts.titleLogin}</h2>
        <p className={styles.text}>{texts.messageLogin}</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <div className={styles.group}>
            <label className={styles.label}>{texts.emailLogin}</label>
            <Link href="/emailsend">
              <a className={styles.link}>{texts.forgotLogin}</a>
            </Link>
          </div>
          <Input
            name="email"
            type="email"
            placeholder={texts.placeEmailLogin}
            value={email}
            changeHandler={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className={styles.input}>
          <label className={styles.label}>{texts.passwordLogin}</label>
          <Password
            name="password"
            value={password}
            changeHandler={({ target }) => setPassword(target.value)}
            placeholder={texts.placePasswordLogin}
          />
        </div>
        <div className={styles.section}>
          <button onClick={signInWithGoogle} className={styles.buttonIcon}>
            <figure className={styles.icon}>
              <Image src={google} alt="google" />
            </figure>
            <p className={styles.text}>{texts.googleLogin}</p>
          </button>
          <button type="submit" className={styles.button}>
            {/* {load && <Load />} */}
            {texts.buttonLogin}
          </button>
          <p className={styles.text}>
            <i>{texts.accountLogin} </i>
            <Link href="/signup">
              <a className={styles.link}>{texts.createLogin}</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
