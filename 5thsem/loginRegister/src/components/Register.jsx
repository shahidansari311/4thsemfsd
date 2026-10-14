import { useState } from 'react'

function Register() {

    const [name,setName]=useState('');
    const [email,SetEmail]=useState('');
    const [password,setPassword]=useState('');

    const getData=(e)=>{
        e.preventDefault();
        const data={name,email,password};
        console.log(data);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
            <div className="card shadow-sm border-0 p-4 login-card">
                <h2 className="text-center mb-2">Create Account</h2>
                <p className="text-muted text-center mb-4">
                    Register to get started
                </p>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                        {/* <div>{name}</div> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            onChange={(e)=>SetEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Create a password"
                            minLength={8}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary w-100"
                        onClick={getData}
                    >
                        Create Account
                    </button>

                    <p className="text-center mt-4 mb-0">
                        Already have an account?{' '}
                        <a href="/login" className="text-decoration-none">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register

