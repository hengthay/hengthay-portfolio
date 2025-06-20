const ContactPlatform = () => {
  return (
      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="#"
          className="bg-[#3b5998] w-10 h-10 rounded-full flex items-center justify-center 
          text-sky-200 hover:scale-110 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-white/40 transition-all duration-300 ease-in-out animate-rotate-element"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook text-xl"></i>
        </a>

        <a
          href="#"
          className="bg-[#0088cc] w-10 h-10 rounded-full flex items-center justify-center 
          text-white hover:scale-110 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-white/40 transition-all duration-300 ease-in-out animate-rotate-element"
          aria-label="Telegram"
        >
          <i className="fa-brands fa-telegram text-xl"></i>
        </a>

        <a
          href="#"
          className="bg-[#0077b5] w-10 h-10 rounded-full flex items-center justify-center 
          text-white hover:scale-110 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-white/40 transition-all duration-300 ease-in-out animate-rotate-element"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin text-xl"></i>
        </a>
      </div>

  )
}

export default ContactPlatform