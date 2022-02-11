import React, { useEffect, useState } from "react"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth"

const LoginLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    const loginwithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                console.log(result.user)
                console.log(result.user.providerData[0])
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

    const loginwithCredientials = (auth, email, password) => {
        console.log(auth + " ; " + email + " ; " + password)
        signInWithEmailAndPassword(auth, email, password)
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

    const showPassword = () => {
        const passwordInput = document.getElementById("loginPassInput")
        if (passwordInput.type === "password") {
            passwordInput.type = "text"
        } else {
            passwordInput.type = "password"
        }
    }

    const loginSubmit = (event) => {
        event.preventDefault()
        loginwithCredientials(auth, email, password)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        document.title = "Log in - Stock Watch"
        document.getElementById("app").style.overflowY = "auto"
    }, [])

    return {
        email,
        password,
        loginwithGoogle,
        showPassword,
        loginSubmit,
        handleEmailChange,
        handlePasswordChange,
    }
}

export default LoginLogin
