import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import firebase from '../assets/firebase.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import reactimage from '../assets/reactimage.png';
import tailwind from '../assets/tailwind.png';


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: git,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 6,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: reactimage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwindcss',
            style: 'shadow-sky-400'
        },
    ]
  return (
    <div
     name="expertise" 
     className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
           <div className='mt-20 pb-8'>
           <h3 className='text-4xl font-bold inline border-b-4 border-gray-500'>My Area of Expertise</h3>
            <p className='py-6'>These are The Technology That I Work With:</p>
           </div>
       
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


            {
                techs.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }

           
        </div>
    </div>
    </div>
  )
}

export default Experience