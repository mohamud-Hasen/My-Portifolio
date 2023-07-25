import React from 'react'

const Contact = () => {
  return (
    <div  name='contact'
    className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8 mt-20 ml-20'>
                <h3 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h3>
                <p className='py-6'>Submit The Form Bellow To Get Intouch With Me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/daf880bf-830d-4740-b994-12b191df8394" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter Your Name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input type="text" name="email" placeholder='Enter Your Email'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                    />
                    <textarea name="message" rows="10" placeholder='Enter Your Message'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                     mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact