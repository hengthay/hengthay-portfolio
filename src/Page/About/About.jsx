import { motion } from "framer-motion";
import AutoType from "./AutoType";
import Profile from '../../images/profile-1.png';
// import Profile from '../../images/pf.png';
import ContactPlatform from "./ContactPlatform";
import { useDarkMode } from "../../components/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const About = () => {
  const { isDark } = useDarkMode();

  return (
    <section id="About" className="section-container dark:text-gray-300 text-black !px-12">
      <motion.div
        className="flex md:flex-row flex-col justify-between items-center w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Content: AutoType + Text + ContactPlatform */}
        <motion.div 
          className="space-y-4 order-2 md:order-1 md:w-1/2"
          variants={fadeUp}
        >
          <AutoType />
          <p className="md:text-lg text-base leading-relaxed">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. To make your bussiness growth in the future.
          </p>
          <div className="space-y-3">
            <p className="md:text-xl text-lg font-semibold text-yellow-400">Feel Free to Contact Me</p>
            <p className="text-[13px] lg:text-base dark:text-slate-400 md:max-w-sm text-slate-700">
              Don't be hesitate to reach out me, you can <br /> reach out to me through those platfroms.
            </p>
          </div>
          <ContactPlatform />
        </motion.div>

        {/* Right Content: Profile Image */}
        <motion.div 
          className="order-1 md:order-2 mb-8 md:w-1/2 flex justify-end"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div
            className={`relative bg-transparent ${
              !isDark ? "border border-gray-300 shadow-sm" : ""
            } dark:bg-gradient-to-t dark:from-sky-400 dark:via-25% dark:via-sky-400/40 dark:to-65% rounded-xl dark:shadow-md`}
          >
            <img
              src={Profile}
              className="md:w-50 md:h-60 w-40 h-50 object-cover px-[5px] rounded-xl"
              alt="Image-Profile"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
