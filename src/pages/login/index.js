import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FiUser } from "react-icons/fi";

function App() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form className="login-global">
                <div className="login-inputs" >
                    <h1>Login</h1>
                    <input placeholder="Digite seu user" type="text" value={user} onChange={e => setUser(e.target.value)} id="user"  />
                    <input placeholder="Digite sua senha" type="text" value={password} onChange={e => setPassword(e.target.value)} id="password" />
                    <button>Entrar</button>
                </div>
                <div className="login-image" >
                    <img src={logo} alt="logo" />
                </div>
            </form>
        </div>
    )
}

export default App;
