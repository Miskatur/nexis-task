import React from 'react';
import banner from '../../assets/banner.png'
import SignUpForm from './Forms/SignUpForm';

const SignUp = () => {
    return (
        <div className='grid lg:grid-cols-5'>

            <div className='flex justify-center items-center lg:col-span-3'>
                <img src={banner} alt="" />
            </div>
            <div className='flex justify-center items-center lg:col-span-2'>
                <div className="card flex-shrink-0 w-full shadow-xl bg-base-100 lg:h-[620px]">
                    <div className="card-body">
                        <h2 className='text-center text-xl leading-6 font-semibold text-black mb-10 lg:my-16'>SignUp Form</h2>
                        <SignUpForm></SignUpForm>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;