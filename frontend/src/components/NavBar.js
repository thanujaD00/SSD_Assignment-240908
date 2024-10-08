import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

// Import the additional FontAwesome icons here
import {
    faHome,
    faCode,
    faFileCode,
    faSignInAlt,
    faUserPlus,
    faBook,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';


export default function NavBarUser() {
    const [user, setUser] = useState({});
    const [role, setRole] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenC, setIsDropdownOpenC] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdownC = () => {
        setIsDropdownOpenC(!isDropdownOpen);
    };

    const closeDropdownC = () => {
        setIsDropdownOpenC(false);
    };

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    useEffect(() => {
        const data = localStorage.getItem("user");
        setUser(JSON.parse(data));
        setRole(localStorage.getItem("role"));
    }, []);

    return (
        <nav className="bg-purple-900 shadow-lg py-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <a className="text-white text-3xl font-bold" href="#">
                        EduCode
                    </a>
                    <div className="md:flex md:items-center space-x-4">
                        <ul className="flex space-x-4 text-white">
                            {role === 'admin' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/adminHome">
                                            <FontAwesomeIcon icon={faHome} /> Admin Home
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item relative group"
                                        onMouseEnter={toggleDropdownC}
                                        onMouseLeave={closeDropdownC}
                                    >
                                        <button className="nav-link focus:outline-none">
                                            <FontAwesomeIcon icon={faBook} /> Course & Tutes
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={`ml-1 fas fa-chevron-down ${isDropdownOpenC ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`${isDropdownOpenC ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                                } origin-top-right absolute right-0 mt-2 transition-transform transform-gpu duration-200 ease-in-out transform ${isDropdownOpenC ? 'scale-y-100' : 'scale-y-0'
                                                }`}
                                        >
                                            <ul className="bg-white text-black border border-gray-200 rounded-lg">
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/getCourseAdmin'}>
                                                        View Course & Tutes
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/createCourse'}>
                                                        Create Course & Tutes
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li
                                        className="nav-item relative group"
                                        onMouseEnter={toggleDropdown}
                                        onMouseLeave={closeDropdown}
                                    >
                                        <button className="nav-link focus:outline-none">
                                            <FontAwesomeIcon icon={faUser} /> Profile
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={`ml-1 fas fa-chevron-down ${isDropdownOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                                } origin-top-right absolute right-0 mt-2 transition-transform transform-gpu duration-200 ease-in-out transform ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'
                                                }`}
                                        >
                                            <ul className="bg-white text-black border border-gray-200 rounded-lg">
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/profile'}>
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/resetPassword'}>
                                                        Change Password
                                                    </a>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 hover:bg-gray-200" onClick={() => logOut()}>
                                                        LogOut
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </>
                            )}
                            {role === 'user' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/userHome">
                                            <FontAwesomeIcon icon={faHome} /> Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/editor">
                                            <FontAwesomeIcon icon={faCode} /> Code Editor
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/viewCourses">
                                            <FontAwesomeIcon icon={faGraduationCap} /> Courese & Tutes
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/allpost">
                                            <FontAwesomeIcon icon={faFileCode} /> Review Code
                                        </a>
                                    </li>

                                    <li
                                        className="nav-item relative group"
                                        onMouseEnter={toggleDropdown}
                                        onMouseLeave={closeDropdown}
                                    >
                                        <button className="nav-link focus:outline-none">
                                            <FontAwesomeIcon icon={faUser} /> Profile
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={`ml-1 fas fa-chevron-down ${isDropdownOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div
                                            className={`${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                                } origin-top-right absolute right-0 mt-2 transition-transform transform-gpu duration-200 ease-in-out transform ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'
                                                }`}
                                        >
                                            <ul className="bg-white text-black border border-gray-200 rounded-lg">
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/profile'}>
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="block px-4 py-2 hover:bg-gray-200" href={'/resetPassword'}>
                                                        Change Password
                                                    </a>
                                                </li>
                                                <li>
                                                    <button className="block px-4 py-2 hover:bg-gray-200" onClick={() => logOut()}>
                                                        LogOut
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </>
                            )}
                            {!role && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link bg-orange-600 rounded text-black px-4 py-2" href="/login">
                                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-teal-400 rounded text-black px-4 py-2" href="/register">
                                            <FontAwesomeIcon icon={faUserPlus} /> Register
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

