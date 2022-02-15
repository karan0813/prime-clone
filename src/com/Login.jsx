import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img className="object-contain  w-40 h-24" src='https://logos-world.net/wp-content/uploads/2021/02/Amazon-Prime-Video-Logo.png' alt='..' />
            <div className="flex flex-col border-gray-300 border-2 p-5 bg-[#FFFFFF]  h-4/5 w-1/4">
                <h1 className="mb-5 text-3xl">Sign In</h1>
                <form className="flex flex-col ">
                    <label className=" font-bold text-sm">Email or mobile phone number</label>
                    <input type="text" className="px-4 py-2 rounded-sm focus:outline-none mb-4" />
                    <div className="flex justify-between items-center">
                        <label className=" font-bold text-sm">Password</label>
                        <a className="  text-sm text-blue-800"> Forget password ?</a>
                    </div>
                    <input type="password" className="px-4 py-2 rounded-sm focus:outline-none border mb-4" />
                    <button className="px-5 w-full py-1 border bg-[#F1C862] rounded-md">Sign In</button>
                </form>
                <p className="text-xs mt-3">By continuing, you agree to Amazon's <span className="text-blue-800">Conditions of Use</span> and <span className="text-blue-800">Privacy Notice.</span> </p>
                <div className="flex items-center">
                    <input type="checkbox" />
                    <span className='text-xs pl-2 '>Keep me signed in. <span className="text-blue-800">Details</span>  </span>
                </div>
                <hr className="my-4" />
                <button className="px-5 w-full py-1 border-2 bg-[#E9EBEE] rounded-md" >Create-account</button>
            </div >

        </div >);
};

export default Login;