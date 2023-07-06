import React from 'react';
import calenderOne from '../assets/portifolio/calenderOne.png';
import exchangeOne from '../assets/portifolio/exchangeOne.png';
import thumbnail2 from '../assets/portifolio/thumbnail2.png';
import todoList from '../assets/portifolio/todoList.png';

const Portfolio = () => {
    const portifolios = [
        {
            id: 1,
            src: calenderOne
        },
        {
            id: 2,
            src: exchangeOne
        },
        {
            id: 3,
            src: thumbnail2,
            URL: 'https://github.com/mohamud-Hasen/dropdown-menu'
        },
        {
            id: 4,
            src: todoList
        }
        
    ]
  return (
    <div name='portifolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out Some Of My Work Here</p>
            </div>

               

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portifolios.map(({id, src}) => (
                        <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-300 hover:scale-105 cursor-pointer' />
                    <div className='flex items-center justify-center'>
                        <button  className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:underline'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:underline'>Code</button>
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