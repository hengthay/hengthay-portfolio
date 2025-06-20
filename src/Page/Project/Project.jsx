import { motion } from "framer-motion";
import { projectData } from '../../JS/projectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Project = () => {
  return (
    <section 
      id="Portfolio"
      className="section-container flex flex-col items-center justify-center md:py-10 py-6 md:px-4 px-2 dark:bg-[#081b25] bg-white mt-20"
    >
      <motion.h1
      variants={titleVariant} 
      initial="hidden"
      animate="visible"
      className="text-gray-800 dark:text-white md:mb-20 mb-10 font-bold text-2xl md:text-3xl lg:text-4xl text-center uppercase">
        Portfolio
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
        >
          {projectData.map((slide) => (
            <SwiperSlide key={slide.id} className="w-[90vw] sm:!w-[350px] md:!w-[500px] !h-[450px] rounded-2xl overflow-hidden shadow-xl relative transition-transform duration-300 group px-2">
              <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ height: "100%" }}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="h-full w-full object-cover absolute inset-0 transition-all ease-in-out duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-6 py-5 text-white transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <h1 className="text-xl font-bold mb-1">{slide.title}</h1>
                  <p className="text-sm line-clamp-3 mb-4 max-w-sm text-gray-300 font-semibold">{slide.description}</p>
                  {slide.tech && (
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-3">
                      {slide.tech.map((techItem, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-tr from-[#9EBC8A] via-[#129990] to-[#9EBC8A] text-xs md:text-sm px-2 py-[2px] rounded-sm text-gray-900 font-semibold"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  )}
                  <div>
                    <a
                      href={slide.linkUrl}
                      target="target_blank"
                      className="inline-block bg-blue-500 text-white text-xs md:text-base px-4 py-2 rounded-md hover:bg-blue-600 transition ease-in-out duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Pagination Dots */}
      <div className="swiper-pagination-custom mt-6 flex justify-center gap-2" />

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          transition: width 0.5s ease-in-out, background 0.5s ease-in-out;
          background: #d1d5db;
        }
        .swiper-pagination-bullet-active {
          width: 32px;
          background: #3b82f6 !important;
        }
      `}</style>
    </section>
  );
};

export default Project;
