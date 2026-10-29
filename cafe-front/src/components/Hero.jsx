import { motion } from "framer-motion";


const Hero = () => {
    return (
        <main>

            {/* ================= HERO SECTION ================= */}
            <section
              id="home"
                 className="w-full min-h-screen bg-orange-100 flex items-center px-6 md:px-8 lg:px-10 pt-15 overflow-hidden"
                 >

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[40%_60%] items-center">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="relative z-10 pr-0 md:pr-2 lg:pr-4 pl-4  xl:pr-5 pl-5">

                        {/* Small Heading */}
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-orange-700 font-semibold text-sm md:text-base uppercase tracking-widest mb-4"
                        >
                            Smart Cafe Management System
                        </motion.p>


                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                        >
                            <span className="text-slate-800">
                                Welcome to{" "}
                            </span>

                            <span className="text-orange-700">
                                Adda
                            </span>

                            <span className="text-slate-900">
                                Tech
                            </span>

                            <br />

                            <span className="text-slate-900">
                                Run Your Cafe{" "}
                            </span>

                            <span className="text-orange-700">
                                Smarter.
                            </span>
                        </motion.h1>


                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-6 text-base md:text-base lg:text-lg text-slate-600 leading-7 lg:leading-8 max-w-xl"
                        >
                            Simplify your cafe operations with one powerful
                            system for managing orders, tables, reservations,
                            billing, menu, customers, and staff.
                        </motion.p>


                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45 }}
                            className="flex flex-col sm:flex-row gap-4 mt-8"
                        >

                            <motion.a
                                href="#features"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-orange-700 text-white px-5 py-3.5 rounded-lg font-semibold text-center shadow-md hover:bg-orange-800 transition"
                            >
                                Get Started
                            </motion.a>


                            <motion.a
                                href="#solutions"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="border-2 border-orange-700 text-orange-700 px-5 py-3.5 rounded-lg font-semibold text-center hover:bg-orange-700 hover:text-white transition"
                            >
                                Explore Features
                            </motion.a>

                        </motion.div>

                    </div>


                    {/* ================= RIGHT IMAGE ================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100,
                            scale: 0.85
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1
                        }}
                        transition={{
                            duration: 1.1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="
                            relative
                            flex
                            items-center
                            justify-center
                            md:justify-end
                            mt-12
                            md:mt-0
                        "
                    >

                        {/* Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.25, 0.4, 0.25]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="
                                absolute
                                w-72
                                h-72
                                md:w-80
                                md:h-80
                                lg:w-[450px]
                                lg:h-[450px]
                                bg-orange-300
                                rounded-full
                                blur-3xl
                            "
                        />

                        {/* Main Image */}
                        <motion.img
                            src="/herohome.jpeg"
                            alt="AddaTech Smart Cafe Management System"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 0.4, 0, -0.4, 0],
                                scale: [1, 1.015, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                scale: 1.04
                            }}
                            className="
                                relative
                                z-10
                                w-full
                                max-w-[500px]
                                md:max-w-[600px]
                                lg:max-w-[700px]
                                xl:max-w-[800px]
                                h-auto
                                object-contain
                                drop-shadow-2xl
                            "
                        />

                    </motion.div>

                </div>

            </section>

        </main>
        
    );
};

export default Hero;