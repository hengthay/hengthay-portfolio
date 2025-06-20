import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggler from '../../components/DarkModeToggler';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef(null);

  const showMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const handleScroll = () => {

      if(window.scrollY > 10) {
        navRef.current.classList.add('ruler');
      }else {
        navRef.current.classList.remove('ruler');
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between each item
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    ref={navRef} 
    className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white dark:bg-slate-900 transition-colors duration-300">
      <nav className="max-w-[1400px] flex justify-between items-center container mx-auto md:py-4 md:px-6 !px-12 py-4">
        <div>
          <span className="font-bold text-2xl text-yellow-500">Hengthay.</span>
        </div>

        <ul className="hidden md:flex items-center md:gap-8 gap-4">
          {['About', 'Skill', 'Portfolio', 'Resume' , 'Contact'].map((item, index) => (
            <li key={index} className="group relative cursor-pointer">
              <a href={`#${item}`} className="text-slate-900 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200">
                {item}
              </a>
              <span className="absolute w-0 left-0 -bottom-1 dark:bg-yellow-400 bg-yellow-500 h-[2px] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <DarkModeToggler />
          {/* GitHub Link */}
          <div className="bg-gray-200/80 dark:bg-slate-700/70 p-1.5 cursor-pointer rounded-full flex justify-center items-center hover:scale-110 transition ease-in-out duration-300">
            <a href="https://github.com/hengthay" target='_blank' className="dark:text-white text-slate-900">
              <i className="fa-brands fa-github h-6 w-6 text-2xl"></i>
            </a>
          </div>
          
          {/* Mobile menu toggle */}
          <div className="md:hidden flex">
            <button
              onClick={showMenu}
              className="text-black dark:text-white text-base cursor-pointer"
            >
              <i className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'} text-2xl hover:text-yellow-400 transition-colors ease-linear duration-200`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
      {menu && (
        <motion.div 
        variants={mobileMenuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="md:hidden bg-slate-100 dark:bg-slate-900 text-black dark:text-white px-12 py-4 space-y-4 transition-all ease-in-out duration-300">
          {['About', 'Skill', 'Portfolio', 'Resume', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item}`}
              variants={menuItemVariants}
              className="block text-gray-800 dark:text-slate-200 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
              onClick={closeMenu}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
