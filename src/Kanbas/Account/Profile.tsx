import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen" className="container mt-4">
            <h3>Profile</h3>

            {/* Username field */}
            <input
                id="wd-username"
                value="alice"
                placeholder="username"
                className="form-control mb-2"
            />

            {/* Password field */}
            <input
                id="wd-password"
                value="123"
                placeholder="password"
                type="password"
                className="form-control mb-2"
            />

            {/* First Name field */}
            <input
                id="wd-firstname"
                value="Alice"
                placeholder="First Name"
                className="form-control mb-2"
            />

            {/* Last Name field */}
            <input
                id="wd-lastname"
                value="Wonderland"
                placeholder="Last Name"
                className="form-control mb-2"
            />

            {/* Date of Birth field */}
            <input
                id="wd-dob"
                value="2000-01-01"
                type="date"
                className="form-control mb-2"
            />

            {/* Email field */}
            <input
                id="wd-email"
                value="alice@wonderland"
                type="email"
                className="form-control mb-2"
            />

            {/* Role dropdown */}
            <select
                id="wd-role"
                className="form-control mb-2"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            {/* Sign out button */}
            <Link
                to="/Kanbas/Account/Signin"
                className="btn btn-danger w-100 mt-2"
            >
                Sign out
            </Link>
        </div>
    );
}
