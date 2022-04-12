/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav id="navbar" className='p-[8px] sticky top-0 bg-[#222] z-[1000] transition ease-in-out delay-750'>
                <ul className='flex items-center transition ease-in-out delay-750'>
                    <a href="https://chat.whatsapp.com/BicNUSEy69L9P1nBN2p3uJ" target="__blank">
                        <img src="/logo.jfif" alt="" id="logo" className='h-12 rounded-full'
                        /></a>

                    <li className="li list-none transition ease-in-out delay-750"><a href="/" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] transition ease-in-out delay-750">Home</a></li>
                    <li className="li list-none transition ease-in-out delay-750">
                        <a href="/classwork" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] transition ease-in-out delay-750">ClassWork</a>
                    </li>
                    <li className="li list-none transition ease-in-out delay-750">
                        <a href="/homework" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] transition ease-in-out delay-750">HomeWork</a>
                    </li>
                    <li className="li list-none transition ease-in-out delay-750">
                        <a href="/timetable" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] transition ease-in-out delay-750">Time Table</a>
                    </li>
                    <li className="li list-none transition ease-in-out delay-750">
                        <a href="/contactus" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] transition ease-in-out delay-750">Contact Us</a>
                    </li>
                    <li className="right li ml-auto" id="rightid">
                        <a href="/aboutus" className="navbarthings hover:text-gray-500 text-white no-underline m-4 text-3xl font-['Dongle'] ml-auto">About Us</a>
                    </li>
                    <div id="icons" className="right text-[2.4rem] hidden text-white items-center justify-center overflow-hidden cursor-pointer">
                        <span id="ham" className="show inline"
                        ><ion-icon name="reorder-three-outline"></ion-icon></span>
                        <span id="cross" className="hide hidden rotate-45"
                        ><ion-icon name="add-outline"></ion-icon></span>
                    </div>
                </ul>
            </nav>
            <Script
                type="module"
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></Script>
            <Script
                nomodule
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></Script>
            <Script src="https://8throse.netlify.app/public/navbar.js" />

        </div>
    )
}

export default Navbar