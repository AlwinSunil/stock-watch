import { useHistory } from "react-router";
import "./Navigation.scss";

function Navigation(props) {
    const history = useHistory();

    return (
        <div className="navigation">
            <div className="navigation__container">
                <div
                    className="btn navigation__goback"
                    onClick={() => history.goBack()}
                >
                    <img src="/assets/icons/back.svg" alt="" />
                </div>
                <div className="navigation__header">
                    <p>{props.header}</p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
