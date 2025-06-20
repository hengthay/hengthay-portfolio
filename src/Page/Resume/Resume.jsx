import Creative from '../../images/creative.jpg';
import { resumeData } from '../../JS/resumeData';
import { motion } from 'framer-motion';

const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Resume = () => {
  return (
    <section id='Resume' className='section-container flex flex-col items-start'>
      <motion.h1
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        className='text-gray-800 dark:text-white md:mb-20 mb-10 font-bold text-2xl md:text-3xl lg:text-4xl text-center uppercase w-full '
      >
        Resume
      </motion.h1>

      <div className='w-full h-auto flex flex-col lg:flex-row md:items-start items-center md:justify-between bg-gray-900 rounded-md md:pt-10 shadow-xs shadow-gray-300 px-2 md:py-20 py-10'>
        <motion.div
          variants={listContainer}
          initial="hidden"
          animate="visible"
          className='relative items-start justify-items-start space-y-6 md:w-1/2 w-full'
        >
          <motion.div
            variants={titleVariant}
            className='flex items-center justify-center gap-x-3 md:gap-x-5 z-10'
          >
            <div className='ml-6 bg-gray-800 md:py-3 md:px-4 py-2 px-3 rounded-[25%] shadow-md text-yellow-400'>
              <i className="fa-solid fa-book-open-reader md:text-xl text-base"></i>
            </div>
            <span className='md:text-2xl text-xl font-bold text-white'>Education</span>
          </motion.div>

          {resumeData.map((resume, index) => (
            <motion.div key={index} variants={listItem} className='relative'>
              <ul className='ml-16 space-y-6'>
                <li className='relative before:content-[""] before:absolute md:before:-left-[19px] md:before:top-3 before:-left-[23px] before:top-3 before:w-2 before:h-2 before:bg-yellow-400 before:rounded-full before:shadow-[0_0_6px_3px_rgba(255,205,99,0.6)] z-10'>
                  <h4 className='text-xl font-semibold text-white'>{resume.title}</h4>
                  <span className='md:text-[15px] text-sm text-yellow-400'>{resume.year}</span>
                  <p className='md:w-[600px] text-wrap text-white md:text-[15px] text-sm'>{resume.description}</p>
                </li>
              </ul>
            </motion.div>
          ))}

          <span className='h-[350px] max-sm:min-h-[450px] w-[2px] bg-gray-500 absolute md:left-12 md:top-12 left-11 top-10 z-0 block'></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='m-2 rounded-md md:w-1/2 w-full flex lg:justify-center justify-center items-center mx-auto max-sm:!mt-24 !mt-20'
        >
          <img
            className='object-cover md:w-[400px] md:h-[400px] w-[250px] h-auto rounded-md shadow-md transition hover:scale-115 duration-300 ease-in-out'
            src={Creative}
            alt="Resume Profile"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
