import { useState } from 'react'
import Forminput from '../components/Forminput'
import '../styles/components/registerform.scss'

const Login = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "password",
            errorMessage: "Password should be 8-20 characters",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data));
    }

    console.log(values);

    return (
        <div className="regist">
            <div className="first-side">
                <div className="card-side">
                    <h1>Log<span className="span">in</span></h1>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                            <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                        ))}
                        <button className="button"><a href="/prod">Login</a></button>
                    </form>
                </div>
            </div>
            <div className="secondary-side">
                <h1>i<span className="span">Team</span></h1>
            </div>
        </div>

    )
}

export default Login