import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebase-config"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, updateEmail, updatePassword, onAuthStateChanged, updateProfile } from "firebase/auth";

// A context object created to be used throughout the application
const AuthContext = React.createContext()

// A custom hook that returns the current user and authentication functions available in the context
export function useAuth() {
  return useContext(AuthContext)
}

// A provider component that wraps the application and provides the authentication context to its children
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState() // A state variable that holds the current user object returned by Firebase

  //  A function that takes an email and password and creates a new user account using Firebase's createUserWithEmailAndPassword() function.
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // A function that takes an email and password and logs in an existing user using Firebase's signInWithEmailAndPassword() function.
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // A function that logs out the current user using Firebase's signOut() function.
  function logout() {
    return signOut(auth)
  }

  // A function that updates the email of the current user using Firebase's updateEmail() function.
  function updateemail(email) {
    return updateEmail(currentUser,email)
  }

  // A function that updates the password of the current user using Firebase's updatePassword() function.
  function updatepassword(password) {
    return updatePassword(currentUser, password)
  }

  // A function that updates the profile of the current user using Firebase's updateProfile() function.
  function updateprofile(input){
    return updateProfile(currentUser, input)
  }

  // useEffect hook that is used to update the currentUser state variable with the current user object returned by Firebase
  // hook is run only once when the component mounts and unsubscribes from Firebase's state change listener when the component unmounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setCurrentUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    updateemail,
    updatepassword,
    updateprofile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}