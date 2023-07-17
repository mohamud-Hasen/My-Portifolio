import React from 'react';
import calenderOne from '../assets/portifolio/calenderOne.png';
import exchangeOne from '../assets/portifolio/exchangeOne.png';
import thumbnail2 from '../assets/portifolio/thumbnail2.png';
import todoList from '../assets/portifolio/todoList.png';

const Portfolio = () => {
    const portifolios = [
        {
            id: 1,
            src: calenderOne,
            github: 'https://github.com/mohamud-Hasen/Calendar',
            code: 'https://github.com/mohamud-Hasen/Calendar/commit/3abe5bfa27cee54f69b5aae60b1af5f797187d03'
        },
        {
            id: 2,
            src: exchangeOne,
            github: 'https://github.com/mohamud-Hasen/Exchange-Rate-Calculator',
            code: 'https://github.com/mohamud-Hasen/Exchange-Rate-Calculator/commit/ede78149afefdb389f19ec9ca0f41de1c416b9f8'
        },
        {
            id: 3,
            src: thumbnail2,
            github: 'https://github.com/mohamud-Hasen/dropdown-menu',
            code: 'https://github.com/mohamud-Hasen/dropdown-menu/commit/c86b817a48e3f3b9c08fb0c0e63b0b37f2206bf8'
        },
        {
            id: 4,
            src: todoList,
            github: 'https://github.com/mohamud-Hasen/To-do-list',
            code: 'https://github.com/mohamud-Hasen/To-do-list/commit/b5e1cbaffd6a7a61523ff93541e4c1736b6924ab'
        }
        
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out Some Of My Work Here</p>
            </div>

               

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portifolios.map(({id, src, github, code}) => (
                        <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-300 hover:scale-105 cursor-pointer' />
                    <div className='flex items-center justify-center'>
                        <button  className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:underline'><a href={github} target='_blank' rel="noreferrer">Github</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:underline'><a href={code}  target='_blank' rel="noreferrer">Code</a></button>
                     </div>
                    </div>
                        
                    ))
                }

                   
                </div>
        </div> 
    </div>
  )
}

export default Portfolio