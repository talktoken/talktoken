import { useState } from "react";

function ReelsNavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-black text-white shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-10 h-10 pb-13 sm:mx-5 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="flex justify-start items-center self-center">
                            <img className="w-[18%]" src="/Images/icon.png" alt="" />
                            <a className="text-[20px] font-medium" href="/">AY CHAIN</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 sm:hidden md:hidden lg:flex">
                        <li className="text-center font-semibold"><a className='pr-3' href="/">Bridge</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="/">Events</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="/">Nfts</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="/">Trade</a></li>
                        <a href="/" rel="noopener noreferrer"><button  className="flex p-[10px] rounded-xl text-[14px] font-medium shadow-md text-white hover:bg-green-700 hover:text-white bg-[#1C7404] sm:hidden md:hidden lg:flex" type="button">Connect Wallet</button></a>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="/"></a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href=""></a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href=""></a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href=""></a></li>
                            <li className=""><a className='hover:text-[#ff014f] font-medium' onClick={showNav}  href="#contact"></a></li>
                        </ul>
                        <div className="flex p-[10px] ml-12 w-[40%] mr-4 rounded-md text-[13px] hover:bg-[#ff014f] hover:text-white bg-[#878e99] sm:w-[50%]">
                            <a href="https://www.resume.com/dashboard/resume/a1dbbd70-42a3-43fb-b7ba-18b37407ed87" target="_blank" rel="noopener noreferrer"><button type="button">Download Resume</button></a>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default ReelsNavBar