import { useState } from 'react'
import Forminput from '../components/Forminput'

const Regist = () => {

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
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "password",
            errorMessage: "Password should be 8-20 characters",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "confirm password",
            errorMessage: "Passwords don't match!",
            label: "ConfirmPassword",
            pattern: values.password,
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
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <button>sing up</button>
        </form>
    )
}

export default Regist