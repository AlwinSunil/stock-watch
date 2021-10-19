import Navigation from "../../components/Navigation";
import UpdateDP from "../../components/UpdateDP";
import UpdateName from "../../components/UpdateName";
import UpdatePassword from "../../components/UpdatePassword";
import "./ProfileUpdate.scss";

function UpdateProfile() {
    return (
        <>
            <Navigation header="Update Profile" />
            <div className="profileupdate">
                <UpdateName />
                <UpdatePassword />
                <UpdateDP />
            </div>
        </>
    );
}

export default UpdateProfile;
