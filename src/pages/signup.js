import { Link, withRouter } from "react-router-dom"
import "../css/signup.css";
import { themeContext } from "../App";
import { useContext, useState } from "react";
import { API_ENDPOINT } from "./url";
import InfoBar from "../components/info";
const Signup = ({ history }) => {
    const { theme } = useContext(themeContext);
    const [info, setInfo] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const [err, setErr] = useState();
    const [showErr, setShowErr] = useState(false);
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        email: ""
    });
    function handleChange(e) {
        switch (e.target.name) {
            case "username":
                setFormState({ ...formState, username: e.target.value })
                break;
            case "password":
                setFormState({ ...formState, password: e.target.value })
                break;
            case "email":
                setFormState({ ...formState, email: e.target.value });
                break;
            default:
                break;
        }
    }
    function handleSubmit() {
        console.log(formState);
        fetch(`${API_ENDPOINT}/register`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            method: "POST",
            body: JSON.stringify(formState)
        }).then(res => res.json()
        ).then(jsonRes => {
            console.log(jsonRes)
            if (jsonRes.success) {
                console.log(jsonRes)
                setInfo("You are all set proceed to login.");
                setShowInfo(true);
                setTimeout(() => {
                    setInfo("");
                    setShowInfo(false);
                }, 5000)


            } else {
                setErr(jsonRes.message);
                setShowErr(true);
                setTimeout(() => {
                    setErr("");
                    setShowErr(false);
                }, 3000)
            }
        })
    }

    return (
        <>
            {showErr ? <InfoBar
                color="red"
                text={err}
            /> : ""}
            {showInfo ? <InfoBar
                color="green"
                text={info}
            /> : ""}
            <h3 id={theme === "light" ? "form_head_signup_light" : "form_head_signup"}>SIGNUP</h3>
            <div id={theme === "light" ? "form_signup_light" : "form_signup"}>
                <input type="email" id="Email_signup" name="email" placeholder="Email" onChange={handleChange} ></input>
                <input type="text" id="Username_signup" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" id="Password_signup" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div id="submit_box">
                <input id={theme === "light" ? "submit_signup_light" : "submit_signup"} type="button" value="Submit" onClick={handleSubmit} />
                <Link to="/login" id={theme === "light" ? "login_link_light" : "login_link"}>Have an Account?</Link>
            </div>
        </>
    )
}

export default withRouter(Signup);