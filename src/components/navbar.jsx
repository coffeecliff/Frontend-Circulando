import React, { useState, useEffect } from 'react';
import logo from "../assets/imagens/buslogo.png"
import { LuBadgeHelp } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsTicketDetailed } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/';
    };

    const menuLinks = (
        <>  
            <a href="/" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2">
            <TiHomeOutline style={{ marginRight: '8px' }} />Home
            </a>
            <a href="/schedule" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2">
                <GrScheduleNew style={{ marginRight: '8px' }} />Cronograma
            </a>
            <a href="/help" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2">
                <LuBadgeHelp style={{ marginRight: '8px' }} />Ajuda
            </a>
            <a href="/explore" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2">
                <FaMapMarkedAlt style={{ marginRight: '8px' }} />Explorar
            </a>
            <a href="/orders" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2">
                <BsTicketDetailed style={{ marginRight: '8px' }} />Pedidos
            </a>

            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2"> <IoMdPerson style={{ marginRight: '8px' }} />Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2 cursor-pointer"><IoExitOutline style={{ marginRight: '8px' }} />Sair</button>
                </>
            ) : (
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-white hover:text-[#95ffff] transition-colors duration-300 text-lg font-stretch-condensed font-semibold flex items-center space-x-2 cursor-pointer"
                    >
                        <IoMdPerson style={{ marginRight: '8px' }} />
                        Conta
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50 cursor-pointer">
                            <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-blue-200">
                                Login
                            </a>
                            <a href="/register" className="block px-4 py-2 text-gray-800 hover:bg-blue-200">
                                Cadastro
                            </a>
                        </div>
                    )}
                </div>
            )}
        </>
    );

    return (
        <nav className="w-full bg-[#007BFF] text-gray-800 py-4 px-2 shadow-lg fixed top-0 left-0 z-30">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-10 w-18 rounded-full z-28" />
                    <a href="/" className="text-2xl font-semibold text-white -translate-x-10 translate-y-1 z-29">
                        Circulando
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8 relative">
                    {menuLinks}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden px-4 py-2 shadow-md shadow-blue-950">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-gradient-to-r from-blue-900 to-blue-900 p-4 transition-all duration-300 space-y-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                {menuLinks}
            </div>
        </nav>
    );
};

export default Navbar;
