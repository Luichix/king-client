import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const initialAuth = window.localStorage.getItem('loggedAppUser')

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth)

  const handleAuth = () => {
    if(auth){
      setAuth(null)
      window.localStorage.removeItem('loggedAppUser')
    } else {
      setAuth(window.localStorage.getItem('loggedAppUser'))
    }
  }
  const data = { auth, handleAuth }

  return(
    <AuthContext.Provider value={data} >{children}</AuthContext.Provider>
  )

}

export { AuthProvider }

export default AuthContext
