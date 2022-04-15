import React, { useContext } from "react"
import { getAuth, signOut } from "firebase/auth"
import { UserProfileContext } from "../../context/UserProfileContext"

function ProfileLogic() {
    /* ================= State and Context ================= */
    const [userProfile] = useContext(UserProfileContext)

    /* ================= Sign out user ================= */
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
