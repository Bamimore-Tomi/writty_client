import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../contexts/userContext";
import { API_ENDPOINT } from "./url";

const Register = () => {

    const [formState, setFormState] = useState({
        username: '',
        password: '',
        email: ''
    });
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);
    const { setUserToken } = useContext(userContext);

    function handleChange(e) {
        switch (e.target.name) {
            case "username":
                setFormState({ ...formState, username: e.target.value })
                break;
            case "password":
                setFormState({ ...formState, password: e.target.value })
                break;
            case "email":
                setFormState({ ...formState, email: e.target.value })
                break;
            default:
                break;
        }
    }
    function handleSubmit() {
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

                setUserToken(jsonRes.message);
                setInfo("You are all set proceed to login 🥳");
                setTimeout(() => {
                    setInfo(null);
                }, 5000)

            } else {
                setError(jsonRes.message + "😓");
                setTimeout(() => {
                    setError(null);
                }, 2000)
            }
        })
    }

    return (

        <div className="flex  flex-col space-y-4  items-center justify-center h-screen ">
            {info ? <div className="bg-green-500 text-white p-2 rounded"><p>{info}</p></div> : <div></div>}
            {error ? <div className="bg-red-500 text-white p-2 rounded"><p>{error}</p></div> : <div></div>}
            <p className="font-bold text-4xl my-b-20 uppercase">Register</p>
            <input type="email" className="bg-purple-100 placeholder-indigo-800 border border-transparent  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-8 h-10 w-70 " onChange={handleChange} name="email" placeholder="email" autoComplete="false" />
            <input className="bg-purple-100 placeholder-indigo-800 border border-transparent  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-8 h-10 w-70 " type="text" onChange={handleChange} name="username" placeholder="username" autoComplete="false" />
            <input className=" bg-purple-100 placeholder-indigo-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  p-8 h-10 w-70 " type="password" onChange={handleChange} name="password" placeholder="password" autoComplete="false" />
            <button className="bg-purple-600 hover:bg-purple-700 p-2 w-20  rounded shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" onClick={handleSubmit}>Sign Up</button>
            <Link to="/" className="text-purple-900"> Have an account?</Link>
            {/* <h1>{JSON.stringify(formState, null, 2)}</h1> */}
        </div>

    )
}
export default Register;














