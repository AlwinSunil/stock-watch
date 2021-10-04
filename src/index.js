import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
    <Router>
        <Switch>
            <App />
        </Switch>
    </Router>,
    document.getElementById("root")
);
