import { useState } from 'react';
import contact from '../../Images/contact.png';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [usernameColor, setUsernameColor] = useState('');
  const [emailColor, setEmailColor] = useState('');

  function isValidition(e) {
    e.preventDefault();
    let valid = true;
    if (username.length >= 8) {
      setErrorUsername('');
      setUsernameColor('border-b-2 border-b-green-500 shadow-xs shadow-green-400');
    } else {
      setErrorUsername('Username must be at least 8 letters.');
      setUsernameColor('border-b-2 border-b-red-500 shadow-xs shadow-red-400');
      valid = false;
    }
    if (email.includes('@') && email.includes('.')) {
      setErrorEmail('');
      setEmailColor('border-b-2 border-b-green-500 shadow-xs shadow-green-400');
    } else {
      setErrorEmail('Invalid email! you forget ("@" or ".")');
      setEmailColor('border-b-2 border-b-red-500 shadow-xs shadow-red-400');
      valid = false;
    }
    if (valid) {
      const token = '7882946899:AAEO0vKum8mUbJDGvZdwFel7eKyNiB317ms';
      const chatId = '1193380294';
      const text = `📩 *New Contact Message*%0A👤 Name: ${username}%0A📧 Email: ${email}%0A📝 Message: ${message}`;
      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=Markdown`)
        .then(res => {
          if (res.ok) {
            Swal.fire({ title: 'Successfully!', icon: 'success', draggable: true });
            setUsername('');
            setEmail('');
            setMessage('');
            setUsernameColor('');
            setEmailColor('');
          }
        }).catch(err => {
          console.error(err);
          alert('⚠️ Error sending message.');
        });
      setTimeout(() => {
        setEmailColor('');
        setUsernameColor('');
      }, 2000);
      setIsValid(true);
    } else {
      Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
      setIsValid(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id='Contact'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="section-container flex flex-col items-center justify-center md:py-10 py-6 md:px-4 px-2 dark:bg-[#081b25] bg-white mt-20"
    >
      <motion.div variants={itemVariants}>
        <h1 className='dark:text-white font-bold lg:text-4xl md:text-3xl text-2xl uppercase lg:mb-20 md:mb-15 mb-10 text-left'>Get In Touch</h1>
      </motion.div>

      <div className='flex lg:flex-row flex-col justify-between items-center gap-x-5'>
        <motion.div variants={itemVariants} className='md:w-1/2'>
          <img src={contact} alt="Contact-image" className='lg:w-[500px] lg:h-auto md:w-[400px] md:h-auto w-[300px] h-auto' />
        </motion.div>

        <motion.div variants={containerVariants} className='md:w-1/2 flex items-center justify-center lg:mt-10 md:mt-8 mt-6'>
          <form>
            <motion.div variants={itemVariants} className='flex flex-col space-y-2 md:mb-4 mb-2'>
              <label htmlFor="name" className='dark:text-white text-gray-900 md:text-base text-sm font-semibold'>Name <span className='text-red-500 font-semibold'>*</span></label>
              <input 
                type="text"
                id='name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`py-2 outline-0 md:w-[600px] w-[350px] md:text-base text-sm rounded-md dark:bg-gray-800 bg-gray-200 px-2 dark:text-white ${usernameColor}`} 
                placeholder='Pachiee' required />
              {errorUsername && <p className="text-red-500 text-sm mt-1">{errorUsername}</p>}
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-col space-y-2 md:mb-4 mb-2'>
              <label htmlFor="email" className='dark:text-white text-gray-900 md:text-base text-sm font-semibold'>Email <span className='text-red-500 font-semibold'>*</span></label>
              <input 
                type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`py-2 outline-0 md:w-[600px] w-[350px] md:text-base text-sm rounded-md dark:bg-gray-800 bg-gray-200 dark:text-white px-2 text-black ${emailColor}`} 
                placeholder='pachiee@gmail.com' required />
              {errorEmail && <p className="text-red-500 text-sm mt-1">{errorEmail}</p>}
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-col space-y-2 md:mb-4 mb-2'>
              <label htmlFor="message" className='dark:text-white text-gray-900 md:text-base text-sm font-semibold'>Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='py-2 outline-0 border-0 md:w-[600px] w-[350px] h-[100px] md:text-base text-sm rounded-md dark:bg-gray-800 bg-gray-200 px-2 dark:text-white' 
                placeholder='Any message goes here..' />
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-end items-center my-4">
              <button
                type='submit'
                onClick={isValidition}
                className="md:px-8 px-4 text-white font-semibold py-2 bg-blue-500 rounded-lg cursor-pointer text-nowrap select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                border-b-[1px] border-blue-400">
                <i className="fa-regular fa-paper-plane text-white mr-2"></i>
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
