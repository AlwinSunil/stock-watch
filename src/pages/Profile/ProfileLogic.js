import { useState, useContext, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { UserProfileContext } from "../../context/UserProfileContext";

function ProfileLogic() {
    /* ================= State and Context ================= */
    const [userProfile] = useContext(UserProfileContext);
    const [loginProviderGoogle, setLoginProviderGoogle] = useState();

    /* ================= Sign out user ================= */
    const signOutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    };

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

    return {
        userProfile,
        loginProviderGoogle,
        setLoginProviderGoogle,
        signOutUser,
    };
}

export default ProfileLogic;
