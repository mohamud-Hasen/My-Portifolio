import React from 'react';
import HeroImg from '../assets/heroImg.jpg'
import { FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center h-full pt-10'>
          <h2 className='text-4xl pt-20  sm:text-7xl font-bold text-white '>I'm a Full Stack Developer.</h2>
          <p className='text-gray-500 py-4 max-w-md'>I'm a Self-taught Front-end Developer with expertise in HTML, CSS, Tailwindcss, JavaScript and React.
           I'm Passionate about creating user-friendly and visually appealing web applications.
            Proficient in responsive web design and cross-browser compatibility. Skilled in leveraging frameworks like Tailwindcss,
             React and Bootstrap to build dynamic and interactive web applications. Dedicated to staying updated with the latest industry trends and best practices.</p>
             <div>
              <Link to="portfolio" smooth duration={500}
               className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
               bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portifolio
                <span className='group-hover:rotate-90 duration-300 pl-3' >
                  <FaArrowRight size={25} className='ml-1' />
                </span>
                
              </Link>
             </div>
        </div>
        <div>
          <img src={HeroImg} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home