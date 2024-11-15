import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h3 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h3>
                <p className='text-xl mt-20'>I'm a Full Stack Developer with expertise in HTML, CSS, Tailwindcss, JavaScript and React.
                     I'm Passionate about creating user-friendly and visually appealing web applications. 
                     Proficient in responsive web design and cross-browser compatibility.
                      Skilled in leveraging frameworks like Tailwindcss, React and Bootstrap to build dynamic and interactive web applications.
                       Dedicated to staying updated with the latest industry trends and best practices.
                     Committed to delivering high-quality code and collaborating effectively in team environments.</p>
                     
            </div>
        </div>
    </div>
  )
}

export default About