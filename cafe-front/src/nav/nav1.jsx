import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-orange-200 border-b border-orange-300 z-50">

            {/* ================= MAIN NAVBAR ================= */}
            <div className="flex items-center justify-between px-4 md:px-8 h-20">

                {/* ================= LOGO ================= */}
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="TeaHub Logo"
                        className="w-25 h-20 object-contain"
                    />
                </div>


                {/* ================= DESKTOP NAVIGATION ================= */}
                <div className="hidden md:flex items-center gap-8">

                    <a
                        href="#home"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        Home
                    </a>

                    <a
                        href="#features"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        Features
                    </a>

                    <a
                        href="#solutions"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        Solutions
                    </a>

                    <a
                        href="#pricing"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        Pricing
                    </a>

                    <a
                        href="#about"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                    >
                        Contact
                    </a>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div className="hidden md:flex items-center gap-4">

                    {/* Login */}
                    <Link to="/login">Login</Link>

                    {/* Get Started */}
                    <a
                        href="#signup"
                        className="text-lg font-bold bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
                    >
                        Get Started
                    </a>

                </div>


                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    className="md:hidden text-slate-700 hover:text-orange-600 transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={30} />
                    ) : (
                        <Menu size={30} />
                    )}
                </button>

            </div>


            {/* ================= MOBILE MENU ================= */}
            {isMenuOpen && (
                <div className="md:hidden bg-orange-100 border-t border-orange-300 px-6 py-5">

                    <div className="flex flex-col gap-4">

                        {/* Home */}
                        <a
                            href="#home"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>

                        {/* Features */}
                        <a
                            href="#features"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>

                        {/* Solutions */}
                        <a
                            href="#solutions"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Solutions
                        </a>

                        {/* Pricing */}
                        <a
                            href="#pricing"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pricing
                        </a>

                        {/* About */}
                        <a
                            href="#about"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="text-lg font-bold text-slate-700 hover:text-orange-600 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>


                        {/* Divider */}
                        <hr className="border-orange-300 my-1" />


                        {/* Login */}
                        <a
                            href="#login"
                            className="text-lg font-bold text-slate-700 text-center px-5 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </a>


                        {/* Get Started */}
                        <a
                            href="#signup"
                            className="text-lg font-bold bg-orange-600 text-white text-center px-6 py-3 rounded-lg hover:bg-orange-700 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </a>

                    </div>

                </div>
            )}

        </nav>
    );
}

export default Nav;