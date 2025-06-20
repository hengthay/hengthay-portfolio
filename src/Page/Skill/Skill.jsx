import { motion } from "framer-motion";
import { technologyData } from "../../JS/technologyData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skill = () => {
  return (
    <div
      id="Skill"
      className="section-container !py-10 md:!py-6 flex justify-center items-center flex-wrap flex-col"
    >
      <motion.h2 
      initial={{opacity: 0, y: 200, x: 100}}
      animate={{opacity: 1, y: 0, x: 0}}
      transition={{ duration: 1 }}
      className="dark:text-white text-gray-800 mb-6 font-bold lg:text-4xl md:text-3xl text-2xl uppercase">
        Skill
      </motion.h2>
      <motion.span 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      className="dark:text-white text-center text-gray-600 mb-6">
        There are some of technology that I have learn and working with.
      </motion.span>

      <motion.div
        className="flex justify-center items-center flex-wrap flex-row md:gap-12 gap-8 max-w-[900px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologyData.map((techItem) => (
          <motion.div
            key={techItem.id}
            className="flex flex-col items-center justify-center space-y-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
            variants={itemVariants}
          >
            <img
              className="object-cover w-12 h-12 max-sm:w-10 max-sm:h-10"
              src={techItem.img}
              alt={techItem.alt}
              draggable={false}
            />
            <span className="dark:text-yellow-400 text-gray-700 font-semibold leading-relaxed">
              {techItem.techName}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
