"use client"
import pp from '../assets/turtleneck.png'
import Image from 'next/image'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import metamask from '../assets/metamask.png'
import ethereum from '../assets/ether.png'
import info from '../assets/info.png'
import React, { useState } from 'react'


const Card = () => {
    const [clicked, setClicked] = useState(false)
    const [followerCount, setFollowerCount] = useState(832)

  return (
    <div className="bg-amber-50 rounded-lg flex flex-justify">
        <div className="flex flex-col p-8">
            <Image 
             className="w-16 rounded-full pb-3"
             src={pp}
             width={55} 
             height={55} 
             alt="profile pic" />
            <h1 className="font-semibold text-lg font-mono">MetaMask</h1>

            <p className="pb-2">@metamask</p>
            <p className="text-gray-500 text-sm w-56 font-medium">Metamask brings Ethereum to your web browser!</p>

            <div className="flex flex-row gap-3 pt-4">
                <div className="bg-white w-[45px] h-[45px] border border-gray-300 border-opacity-60 rounded-lg flex justify-center items-center">
                    <Image src={linkedin} width={25} height={25} alt="linkedin" />
                </div>
                <div className="bg-white w-[45px] h-[45px] border border-gray-300 border-opacity-60 rounded-lg flex justify-center items-center">
                    <Image src={github} width={35} height={35} alt="Github" />
                </div>

                <div className="bg-white w-[45px] h-[45px] border border-gray-300 border-opacity-60 rounded-lg flex justify-center items-center">
                    <Image src={metamask} width={30} height={30} alt="metamask" />
                </div>

                <div className="bg-white w-[45px] h-[45px] border border-gray-300 border-opacity-60 rounded-lg flex justify-center items-center">
                    <Image src={ethereum} width={25} height={25} alt="ether" />
                </div>
                
            </div>
        </div>

        <div className="flex flex-col pt-20 px-8">
            <div className="flex ">
                <p className="text-gray-600 text-sm font-medium">6/8 Organizations</p>
                <Image src={info} className="h-5 w-5 ml-44" alt="info" />
            </div>
            
            <div className="bg-gray-300 w-80 h-2 rounded-lg mt-2">
                <div className="bg-orange-500 w-64 rounded-lg h-2"></div>
            </div>
            
            <div className="flex flex-row-reverse pt-[75px]">
                <p className="text-gray-600 text-lg font-medium"><span className="font-bold text-black">{followerCount}</span> Followers</p>
            </div>

            <div className="flex flex-row-reverse pt-3">

                <button onClick={() => {
                    setClicked(!clicked)
                    setFollowerCount(clicked ? followerCount - 1 : followerCount + 1)
                }} className={`${clicked ? "bg-white text-black border border-gray-300 opacity-60" : "bg-black text-white "} justify-center items-center rounded-lg h-12 w-32 font-semibold`} >
                    { clicked ? "Following" : "Follow"}
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Card