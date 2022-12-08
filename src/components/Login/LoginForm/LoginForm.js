import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });
    const [errorMessage, setErrorMessage] = useState('')

    if (token) {
        navigate('/attendance')
    }


    const handleUserLogin = data => {
        const userData = {
            email: data.email,
            password: data.password
        }
        setErrorMessage('')

        fetch(`https://test.nexisltd.com/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem('accessToken', data.access_token)
                    setToken(data.access_token)
                }
                if (data.error) {
                    setErrorMessage(data.error)
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleUserLogin)} className='mb-10 md:mb-20 lg:mb-[100px]'>
                <div className="mb-10">
                    <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Write Email Address" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black placeholder-[#B4B4B4] outline-none " />{errors.email && errors.email.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                </div>
                <div className="mb-10">
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: { value: 8, message: 'Password must be 8 character or longer!' },
                    })} placeholder="Write Password" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none " />
                    {errors.password && <p className='text-red-600 text-xs text-left' role="alert">{errors.password?.message}</p>}
                    {
                        errorMessage && <p className='text-red-600 text-xs text-left' role="alert">{errorMessage}</p>
                    }
                </div>
                <div className="text-center mb-10">
                    <button disabled={!isValid} type='submit' className={`${!isValid ? 'bg-gray-500' : 'btn-primary hover:border-2 hover:bg-white hover:text-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Login</button>
                </div>


            </form>
            <p className='text-center text-[#7E7E7E] text-sm'>Don't have an account? <Link to='/signup' className='uppercase text-theme-primary text-sm font-semibold hover:underline'>SignUp Here</Link></p>


        </div>
    );
};

export default LoginForm;