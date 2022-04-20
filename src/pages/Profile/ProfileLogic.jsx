import React, { useContext } from "react"
import { getAuth, signOut } from "firebase/auth"
import { UserProfileContext } from "../../context/UserProfileContext"

function ProfileLogic() {
    // Context declaration
    const [userProfile] = useContext(UserProfileContext)

    // Sign out user function
    const signOutUser = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error)
            })
    }

    return {
        userProfile,
        signOutUser,
    }
}

export default ProfileLogic
