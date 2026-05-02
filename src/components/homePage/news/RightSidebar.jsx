import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='space-y-5'>
            <h2 className="text-lg font-bold">Login With</h2>
           <div className='flex flex-col gap-4'>
             <button className='btn btn-outline'>
                <FaGoogle />Login with Google
                </button>
            <button className='btn btn-outline'>
                <FaGithub />Login with GitHub
                </button>
           </div>
        </div>
    );
};

export default RightSidebar;