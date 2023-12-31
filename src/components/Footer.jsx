import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                    </>
            ),
            href: 'https://www.linkedin.com/in/mohmud-hasen-a61465277/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                    </>
            ),
            href: 'https://github.com/mohamud-Hasen'
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                    </>
            ),
            href: 'mailto:mohmudes4@gmail.com'
           
        },
        {
            id: 4,
            child: (
                <>
                    Twitter <FaTwitter size={30} />
                    </>
            ),
            href: 'https://twitter.com/MohmudEs141'
            
        },
        {
            id: 5,
            child: (
                <>
                   Youtube <FaYoutube size={30} />
                    </>
            ),
            href: 'https://www.youtube.com/channel/UCZUP276s1PBFj8fDiYkp-aA'
            
        },
        {
            id: 6,
            child: (
                <>
                   Instagram <FaInstagram size={30} />
                    </>
            ),
            href: 'https://www.instagram.com/mohmud141/'
            
        },
        {
            id: 7,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                    </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ];
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:hidden '>
        <ul>
            {links.map(({id, child, style, href, download}) => (
                 <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-90px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'
                 + "" + style}>
                 <a href={href} className='flex justify-between items-center w-full text-white'
                 download={download} target='_blank' rel="noreferrer">
                 {child}
                     
                 </a>
             </li>
            ))}
           
        </ul>
    </div>
  )
}

export default Footer