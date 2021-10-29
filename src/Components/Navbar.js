import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="nav-box">
            <div className="logo">
                <h2>
                    InternAdda
                </h2>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Profile</a>
                    </li>
                    <li>
                        <a href='#'>Internships</a>
                    </li>
                </ul>

            </div>
        </nav>
        </>
    );
};
export default Navbar;