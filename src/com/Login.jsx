import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { auth } from "../firebase"



const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")


    const signin = (e) => {
        e.preventDefault();
        //login
        auth.signInWithEmailAndPassword(email, password).then(user => {
            history.push("/home")
        }).catch(error => { alert(error.message) })
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(authuser => {
            if (authuser) {
                history.push("/home")
            }
        }).catch(err => { alert(err.message) })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <img className="object-contain  w-40 h-24" src='https://logos-world.net/wp-content/uploads/2020/11/Google-Play-Logo-2015-2016.png' alt='..' />
            <div className="flex flex-col border-gray-300 border-2 p-5 bg-[#FFFFFF]  h-4/5 lg:w-1/4 w-full">
                <h1 className="mb-5 text-3xl">Sign In</h1>
                <form className="flex flex-col ">
                    <label className=" font-bold text-sm">Email or mobile phone number</label>
                    <input type="text" className="px-4 py-2 rounded-sm focus:outline-none mb-4 border" value={email} onChange={e => { setEmail(e.target.value) }} />
                    <div className="flex justify-between items-center">
                        <label className=" font-bold text-sm">Password</label>
                        <a className="  text-sm text-blue-800"> Forget password ?</a>
                    </div>
                    <input type="password" className="px-4 py-2 rounded-sm focus:outline-none border mb-4" value={password} onChange={e => { setpassword(e.target.value) }} />
                    <button className=" hover:border-black px-5 w-full py-1 border bg-[#F1C862] rounded-md" onClick={signin}>Sign In</button>
                </form>
                <p className="text-xs mt-3">By continuing, you agree to Amazon's <span className="text-blue-800">Conditions of Use</span> and <span className="text-blue-800">Privacy Notice.</span> </p>
                <div className="flex items-center">
                    <input type="checkbox" />
                    <span className='text-xs pl-2 '>Keep me signed in. <span className="text-blue-800">Details</span>  </span>
                </div>
                <hr className="my-4" />
                <button className="hover:border-black px-5 w-full py-1 border-1 border-gray-800 bg-[#E9EBEE] rounded-md" onClick={register} >Create-account</button>
            </div >

        </div >);
};

export default Login;
