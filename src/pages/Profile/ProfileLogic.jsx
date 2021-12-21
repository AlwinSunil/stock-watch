import React from "react";
import { useState, useContext, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UserProfileContext } from "../../context/UserProfileContext";

function ProfileLogic() {
    /* ================= State and Context ================= */
    const [userProfile] = useContext(UserProfileContext);
    const [loginProviderGoogle, setLoginProviderGoogle] = useState();

    /* ================= Useeffect ================= */
    useEffect(() => {
        console.log(userProfile[0]);
        if (userProfile[0].providerId === "google.com") {
            setLoginProviderGoogle(true);
            console.log("Provider : Google.com");
        } else {
            setLoginProviderGoogle(false);
        }
    }, [userProfile]);

    /* ================= Sign out user ================= */
    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        userProfile,
        loginProviderGoogle,
        setLoginProviderGoogle,
        signOutUser,
    };
}

export default ProfileLogic;
