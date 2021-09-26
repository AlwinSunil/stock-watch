import { Link } from "react-router-dom";
import "./AddBtn.scss";

function AddBtn() {
    return (
        <div className="addstock">
            <Link to="/addstock" className="addstock-btn">
                <img src="/assets/icons/add.svg" alt="" />
                <p>Add Stock</p>
            </Link>
        </div>
    )
}

export default AddBtn
