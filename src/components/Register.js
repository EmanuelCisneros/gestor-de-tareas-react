import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";


export function Register() {
    const [user, setUser] = useState ({
        email: "",
        password: "",
    });
    const {signup} = useAuth()
    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) =>
        setUser({...user, [name]: value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(user.email, user.password);
            navigate('/');
        }   catch (error) { 
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" 
            name="email" 
            placeholder="miemail@itpatagonia.com"
            onChange={handleChange} 
            />

            <label htmlFor="password">Password</label>
            <input type="password" 
            name="password" 
            id="password"
            onChange={handleChange}
            />
    
    <button>Register</button>
    </form>
)
}
