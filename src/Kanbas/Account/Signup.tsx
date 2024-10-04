import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="container mt-4">
            <h3>Sign up</h3>
            {/* Username input */}
            <input
                placeholder="username"
                className="form-control mb-2"
            />

            {/* Password input */}
            <input
                placeholder="password"
                type="password"
                className="form-control mb-2"
            />



            {/* Sign up button */}
            <Link
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100 mb-2"
            >
                Sign up
            </Link>

            {/* Sign in link */}
            <Link
                to="/Kanbas/Account/Signin"
                className="d-block text-center"
            >
                Sign in
            </Link>
        </div>
    );
}
