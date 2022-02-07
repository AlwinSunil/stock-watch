import React, {useState, useEffect} from "react"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth"

const SignupLogic = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [termsCheckbox, setTermsCheckbox] = useState()
    const [userAccount] = useState()

    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    const signupwithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                console.log(result.user)
                console.log("Token :" + token)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const credential = GoogleAuthProvider.credentialFromError(error)
                console.log(error)
                console.log(errorCode + " : " + errorMessage)
                console.log("Credential : " + credential)
                console.log(error.email)
            })
    }

    const signupwithCredientials = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log("Error : " + errorCode)
                console.log("Error : " + errorMessage)
            })
    }

    const signupSubmit = (event) => {
        event.preventDefault()
        signupwithCredientials(auth, email, password)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleTermsChange = (event) => {
        setTermsCheckbox(!termsCheckbox)
    }

    useEffect(() => {
        document.title = "Sign up - Stock Watch"
        document.getElementById("app").style.overflow = "auto"
        document.getElementById("app").style.height = "auto"
    }, [])

    return {
        name,
        email,
        password,
        termsCheckbox,
        userAccount,
        signupSubmit,
        signupwithGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleTermsChange,
    }
}

export default SignupLogic
