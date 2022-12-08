import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { toast } from 'react-hot-toast';

const SignUpForm = () => {
    const navigate = useNavigate()
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });
    const [formStep, setFormStep] = useState(0)
    const handleFormProcessing = () => {
        setFormStep(current => current + 1)
    }

    const backPreviousStep = () => {
        setFormStep(current => current - 1)
    }
    const handleUserRegister = data => {
        const userData = {
            first_name: data.firstName,
            last_name: data.lastName,
            phone_number: data.phone,
            email: data.email,
            password: data.password,
        }
        fetch('https://test.nexisltd.com/signup', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigate('/login')
                }
                else {
                    toast.error(data.error)
                }
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleUserRegister)}>
                {
                    formStep === 0 &&
                    <>
                        <div className="mb-10">
                            <input type="text" {...register("firstName", { required: true })} placeholder="Write a First name" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                            {errors.firstName && errors.firstName.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                        </div>
                        <div className="mb-10">
                            <input type="text" {...register("lastName", { required: true })} placeholder="Write a Last name" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none focus:border-theme-2nd focus-visible:shadow-none" />
                            {errors.lastName && errors.lastName.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                        </div>
                        <div className="text-center mb-10 md:mb-20 lg:mb-[100px] flex gap-4">
                            {
                                formStep > 0 &&
                                <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                            }
                            <button onClick={handleFormProcessing} disabled={!isValid} type='button' className={`${!isValid ? 'bg-gray-500' : 'btn-primary hover:border-2 hover:bg-white hover:text-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Next Step<HiArrowNarrowRight /></button>
                        </div>
                        {
                            formStep === 0 &&
                            <p className='text-center text-[#7E7E7E] text-sm'>Already have an account?  <Link to='/login' className='uppercase text-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                        }
                    </>
                }
                {
                    formStep === 1 &&
                    <>
                        <div className='mb-10'>
                            <div className="flex justify-center items-center">
                                <input type="text" placeholder='+880' className='w-16 py-3 pr-5 pl-2 mr-1 border-b border-b-[#A4A4A4] text-black' disabled />
                                <input type="text" {...register("phone", { required: true })} placeholder="1xxxxxxxxx" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none" />

                            </div>
                            {errors.phone && errors.phone.type === "required" && <p className='text-red-600 text-xs text-left ml-[72px]' role="alert">This field is required</p>}
                        </div>
                        <div className="mb-10">
                            <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} placeholder="Write Email Address" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none " />{errors.email && errors.email.type === "required" && <p className='text-red-600 text-xs text-left' role="alert">This field is required</p>}
                        </div>
                        <div className="text-center mb-10 md:mb-20 lg:mb-[100px] flex gap-4">
                            {
                                formStep > 0 &&
                                <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                            }
                            <button onClick={handleFormProcessing} disabled={!isValid} type='button' className={`${!isValid ? 'bg-gray-500' : 'btn-primary hover:border-2 hover:bg-white hover:text-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Next Step <HiArrowNarrowRight /></button>
                        </div>
                        {
                            formStep === 0 &&
                            <p className='text-center text-[#7E7E7E] text-sm'>Already have an account?  <Link to='/login' className='uppercase  text-primary text-sm font-semibold hover:underline'>Login Here</Link></p>
                        }
                    </>
                }
                {
                    formStep >= 2 &&
                    <>
                        <div className="mb-10">
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: { value: 8, message: 'Your password must be 8 character' },
                            })} placeholder="Write Password" className="border-b border-b-[#A4A4A4] w-full bg-[#FCFDFE] py-3 px-5 text-black  placeholder-[#B4B4B4] outline-none" />
                            {errors.password && <p className='text-red-600 text-xs text-left' role="alert">{errors.password?.message}</p>}
                        </div>
                        <div className="text-center mb-10 flex gap-4">
                            {
                                formStep > 0 &&
                                <button onClick={backPreviousStep} className='text-[#767676] text-sm font-bold flex gap-1 items-center'><HiArrowNarrowLeft /> Back</button>
                            }
                            <button onClick={handleFormProcessing} disabled={!isValid} type='submit' className={`${!isValid ? 'bg-gray-500' : 'btn-primary hover:border-2 hover:bg-white hover:text-primary'} shadow-shadow-tow py-4 px-5 rounded-2xl text-white font-medium flex items-center gap-[10px] mx-auto`}>Sign Up</button>
                        </div>
                    </>

                }
            </form>
        </div>
    );
};

export default SignUpForm;