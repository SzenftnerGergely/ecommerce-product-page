import { motion } from "framer-motion"
import { links } from "../lib/constants"
import ShoppingCart from "./ShoppingCart"

const Navbar = () => {

    return (
        <header>
            <div className='mb-16 lg:py-10 border-b flex items-center justify-between 
            mx-auto max-w-2xl lg:max-w-[1440px] px-6 md:px-0'>

                <div className='flex items-center py-8 lg:py-0'>
                    <div className='flex items-center gap-3'>
                        {/* <SheetDemo /> */}
                        <motion.div
                            whileHover={{ y: -5, paddingBlockEnd:"4px", borderBottomColor: "#ff7d1a", borderBottomWidth: "3px" }}
                        >
                            <a href="/">
                                <img src="./logo.svg" alt="main-logo"/>
                            </a>
                        </motion.div>

                    </div>

                    <nav className='hidden gap-10 lg:flex ml-16'>
                        {links.map((link, idx) => (
                            <div key={idx}>
                                    <a
                                        href={link.href}
                                        className='text-lg font-semibold text-[#b6bcc8] trasition-all duration-100 
                                        hover:text-[#1d2025] hover:border-b-4 pb-[3.5rem] hover:border-b-[#ff7d1a]'
                                    >
                                        {link.name}
                                    </a>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className='flex items-center justify-between sm:gap-6'>
                    <div className='p-2 rounded-full relative'>
                        <ShoppingCart /> 
                    </div>

                    <div>
                        <img
                            className='hover:border-2 hover:border-[#ff7d1a] rounded-full 
                            transition-all duration-75 cursor-pointer h-10 w-10 sm:h-14 sm:w-14'
                            src="/image-avatar.png"
                            alt='avatar'
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar
