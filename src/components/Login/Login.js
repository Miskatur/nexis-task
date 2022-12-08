import React from 'react';
import banner from '../../assets/banner.png'
import LoginForm from './LoginForm/LoginForm';
const Login = () => {
    return (
        <div className='grid lg:grid-cols-5'>

            <div className='flex justify-center items-center lg:col-span-3'>
                <img src={banner} alt="" />
            </div>
            <div className='flex justify-center items-center lg:col-span-2'>
                <div className="card flex-shrink-0 w-full shadow-xl bg-base-100 lg:h-[630px]">
                    <div className="card-body">
                        <h2 className='text-center text-xl leading-6 font-semibold text-black mb-10 lg:my-24'>Log In Form</h2>
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;