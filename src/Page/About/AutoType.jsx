import {ReactTyped} from 'react-typed'
// Auto typed text
const AutoType = () => {
  return (
    <div className='md:space-y-3 space-y-2'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Hello, I am Hengthay</h1>
      <p className='md:text-2xl font-semibold text-xl'>a Junior{' '}
        <span className='bg-gray-800 px-1 py-[2px] rounded-md'>
          <ReactTyped 
          className='dark:text-yellow-400 text-white'
          strings={['Frontend Developer', 'UX/UI Designer']}
          typeSpeed={100}
          backSpeed={100}
          backDelay={1000}
          loop
        />
        </span>
      </p>
    </div>
  )
}

export default AutoType