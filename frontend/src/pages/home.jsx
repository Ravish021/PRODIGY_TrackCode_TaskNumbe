import React from "react";
import { Link } from "react-router-dom";

const home = ()=>{
    return(
        <div className="bg-green-400  ">
            <div className="bg-blue-600 h-52 flex flex-col items-center justify-center gap-4 -mt-20">
                <h1 className="text-3xl font-bold text-white">WelCome To</h1>
                <h2 className="text-7xl font-bold text-white ">Prodigy InfoTech</h2>
                <p className="text-2xl font-medium ">Providing World Class E-Learning Experince with Real world Internships</p>
            </div>
            <div className="  h-screen flex flex-col items-center justify-center">
                <div className="h-20">
                    <p className="text-center text-4xl font-medium">Secure User Authentication</p>
                </div>
                <h1 className="text-2xl text-center font-medium ">YOU SUCCESSFULLY LOGIN</h1>
            <Link to="/login" className="bg-blue-500 mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</Link>
            </div>
        </div>
    )
}

export default home;