import Navigation from "../../components/Navigation/Navigation";
import ProfileLogic from "./ProfileLogic";
import "./Profile.scss";

function Profile() {
    const { userProfile, loginProviderGoogle, signOutUser } = ProfileLogic();

    return (
        <div className="profle">
            <Navigation />
            {userProfile.map((user) => (
                <div
                    className="profile__card"
                    key={Math.random().toString(36).substring(2, 7)}
                >
                    <div className="profile__card-img">
                        <img
                            src={`https://avatars.dicebear.com/api/male/john.svg?background=%23a3a2ff`}
                            alt=""
                        />
                    </div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
            <div className="profile__settings">
                {loginProviderGoogle ? null : (
                    <div className="usersettings-btn">
                        <p>Reset Password</p>
                    </div>
                )}
                <div
                    className="usersettings-btn usersettings-logout"
                    onClick={signOutUser}
                >
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
