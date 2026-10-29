function Footer() {
    return (
        <footer className="bg-orange-200 text-black">

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Company */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            <span className="text-orange-600">Adda</span>{" "}
                            <span className="text-black">Tech</span>
                        </h2>

                        <p className="text-slate-700 leading-7">
                            We build smart and modern software solutions
                            that help businesses grow, work efficiently,
                            and serve their customers better.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#home"
                                className="hover:text-orange-600 transition"
                            >
                                Home
                            </a>

                            <a
                                href="#features"
                                className="hover:text-orange-600 transition"
                            >
                                Features
                            </a>

                            <a
                                href="#pricing"
                                className="hover:text-orange-600 transition"
                            >
                                Pricing
                            </a>

                            <a
                                href="#contact"
                                className="hover:text-orange-600 transition"
                            >
                                Contact
                            </a>

                        </div>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Contact Us
                        </h3>

                        <div className="flex flex-col gap-3 text-slate-700">

                            <p>📍 Kathmandu, Nepal</p>
                            <p>📧 support@addatech.com</p>
                            <p>📞 +977 9806852379</p>

                        </div>
                    </div>

                </div>


                {/* Copyright */}
                <div className="border-t border-orange-300 mt-8 pt-5">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">

                        <p className="text-sm ">
                            © 2026 <span className="font-bold text-orange-700">Adda</span><span className="font-bold ">Tech</span>. All rights reserved.
                        </p>

                        <div className="flex gap-5 text-sm">

                            <a
                                href="#privacy"
                                className="hover:text-orange-600 transition"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#terms"
                                className="hover:text-orange-600 transition"
                            >
                                Terms & Conditions
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;